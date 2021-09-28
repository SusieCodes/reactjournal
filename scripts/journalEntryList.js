// import { getJournalEntries } from "./journalData.js"
// import { JournalEntryComponent } from "./journalEntry.js"

// const entryLog = document.querySelector("#entryLog");

// const addEntriesToDom = (arrayOfEntries) => {

//     let entryHTMLRep = "";
//     for (const singleEntry of arrayOfEntries) {
//         entryHTMLRep += JournalEntryComponent(singleEntry);
//     }
    
//     entryLog.innerHTML += entryHTMLRep
// }

// export const EntryListComponent = () => {
//     const allEntries = getJournalEntries();
//     addEntriesToDom(allEntries);
// }

// import { Post } from "./post.js";

// export const postList = (allPosts) => {
// 	let postHTML = "";
// 		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
// 		for (const postObject of allPosts) {
// 			//what is a postObject?
// 			postHTML += Post(postObject)
// 		}
// 		return postHTML;
	
// }