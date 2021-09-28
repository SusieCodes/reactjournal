import { postList } from "./postList.js";
import { getPosts, createPost, deletePost, getSinglePost, updatePost } from "./dataManager.js";
import { notFilledInsert } from "./modal.js";
import { entryEdit } from "./entryEdit.js";
import { journalEntryForm } from "./journalEntry.js";


const applicationElement = document.getElementById("main");

// Get the entry form info to use with Event Listeners
const entryElement = document.getElementById("entry-form");

// Get the post list info to use with Event Listeners
const postElement = document.querySelector(".post__list");

const showJournalEntryForm = () => { 
	console.log("showJournalEntryForm has executed");
    entryElement.innerHTML = journalEntryForm();
}

const showPostList = () => {
	console.log("showPostList executed");
	getPosts().then((allEntries) => {
		postElement.innerHTML = postList(allEntries);
	})
}

const showEdit = (entryObj) => {
    entryElement.innerHTML = entryEdit(entryObj);
}

const startJournal = () => {
	showJournalEntryForm();
    showPostList();
}

startJournal();

const formNotFilledPopUp = () => {
    console.log("formNotFilledPopUp is executing");
    savedLocOfModalId.style.display = "block";
};

const validateForm = () => {
    // var a = document.forms["form"]["journalDate"].value;
    // console.log("journalDate variable a is: " + a);
    var b = document.forms["form"]["concepts"].value;
    console.log("Title variable b is: " + b);
    var c = document.forms["form"]["journalEntry"].value;
    console.log("journalEntry variable c is: " + c);
    if (
		// a == "" || 
		b == "" || 
		c == "") {
        // console.log("abc evaluated as at least one empty string and were saved as: " + a + " and " + b + " and " + c)
        return false;
    } else {
        // console.log("abc evaluated as no empty strings and was saved as: " + a + " and " + b + " and " + c)
        return true;
      }
}

// Get the modal location and fill it with html
const savedLocOfModalId = document.getElementById("modalId");
savedLocOfModalId.innerHTML = notFilledInsert();

// Get the button that validates if form is filled and submits entry to json
// const bothBtns = document.getElementById("bothBtns");

// Gets location of X in modal to close when clicked
const span = document.getElementById("close-modal");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    savedLocOfModalId.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == savedLocOfModalId) {
        savedLocOfModalId.style.display = "none";
    }
}
  
// Event listener for posting new entry or cancelling
applicationElement.addEventListener("click", event => {
// event.preventDefault();
if (event.target.id === "btnId") {
    console.log("you clicked btnId")
    const returnedValOfValidateForm = validateForm();
    if (returnedValOfValidateForm) {
        console.log("AddEventListener worked and validateForm returned true");
    const theDate = document.querySelector("input[name='journalDate']").value
    const title = document.querySelector("input[name='concepts']").value
    const myEntry = document.querySelector("textarea[name='journalEntry']").value
    const myMood = document.querySelector("select[name='mood']").value
    //we haven't created a user yet - for now, I'll hard code `333`.
    const postObject = {
        timestamp: Date.now(),
        // timestamp: theDate,
        concept: title,
        entry: myEntry,
        mood: myMood,
        userId: 333,
    }
    createPost(postObject).then(dbResponse => {
        showPostList();
		showJournalEntryForm();
    })
    }
    else {
        console.log("AddEventListener worked and evaluated as false... the value of returnedValOfValidatedForm is: " + returnedValOfValidateForm);
        formNotFilledPopUp();
    }   
}
})

applicationElement.addEventListener("click", (event) => {
	if (event.target.id === "cancelBtnId") {
		console.log("you clicked cancelBtnId");
		showJournalEntryForm();
	}
})

applicationElement.addEventListener("click", (event) => {
	if (event.target.id.startsWith("edit")){
		console.log("post clicked to edit", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
        const postId = event.target.id.split("--")[1];
        getSinglePost(postId)
        .then(response => {
        showEdit(response);
        window.scrollTo({ top: 0, behavior: "smooth" })
	})
    }
    if (event.target.id.startsWith("delete")) {
		console.log("delete button pressed and postId is recorded as: " + event.target.id.split("--")[1])
        const postId = event.target.id.split("--")[1];
        deletePost(postId)
        .then(response => {
        showPostList();
        window.scrollTo({ top: 0, behavior: "smooth" })
        })
  }
})

applicationElement.addEventListener("click", event => {
    // event.preventDefault();
    if (event.target.id.startsWith("updatePost")) {
        console.log("you clicked updatePost button")
      const postId = event.target.id.split("__")[1];
      //collect all the details into an object
	  const title = document.querySelector("input[name='concepts']").value
	  const myEntry = document.querySelector("textarea[name='journalEntry']").value
	  const myMood = document.querySelector("select[name='mood']").value
      const entryObject = {
		timestamp: Date.now(),
        // timestamp: theDate,
        concept: title,
        entry: myEntry,
        mood: myMood,
        id: parseInt(postId)
        // userId: getLoggedInUser().id,
        // timestamp: parseInt(timestamp),
      }
      updatePost(entryObject)
        .then(response => {
          showPostList();
          showJournalEntryForm();
        })
    }
	if (event.target.id === "post-cancel") {
		console.log("you clicked CANCEL")
		showJournalEntryForm();
	}
  })

  
  
  
   
