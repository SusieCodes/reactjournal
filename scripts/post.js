import { formatDate } from "./helper.js";

export const Post = (entryObj) => {
    let pageDate = formatDate(entryObj.timestamp);
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">

            <div id="date--${entryObj.id}" class="entry__date">${pageDate}</div>
            <h2 id="concept--${entryObj.id}" class="entry__concept">${entryObj.concept}</h2>
            <div id="post--${entryObj.id}" class="entry__entry">${entryObj.entry}</div>
            <div id="mood--${entryObj.id}" class="mood">
            <div id="mood1--${entryObj.id}" class="entry__mood">Mood:</div><div id="mood2--${entryObj.id}" class="entry__mood--info">${entryObj.mood}</div>
            </div>

            <div id="postBtns" class="postBtns">
            <button id="edit--${entryObj.id}" class="post-btn">EDIT</button>
            <button id="delete--${entryObj.id}" class="post-btn">DELETE</button>
            </div> <!-- closes postBtns -->

        </section>
        `
  }

  