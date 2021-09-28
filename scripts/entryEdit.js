import { formatDate } from "./helper.js";

export const entryEdit = (entryObj) => {
  	return `

<section class="input__form">

        <h2>Edit A Journal Entry</h2>

        <form id="form" method="put" name="form" action="">

          <fieldset>

		  <div class="label">
		  <div class="flex-date">
			  <div>First Posted On: </div><div class="date-display" name="date-display">${formatDate(entryObj.timestamp)}</div>
		  </div> <!-- closes flex-date-->
	  </div> <!-- closes label -->

            <div class="label">
              <label for="concepts">Title</label>
            </div> <!-- closes label -->
            <div class="input">
              <input type="text" name="concepts" id="concepts" value="${entryObj.concept}">
            </div> <!-- closes input -->

            <div class="label">
              <label for="journalEntry">Journal Entry</label>
              </div> <!-- closes label -->
            <div class="input">
              <textarea name="journalEntry" id="journalEntry" value="">${entryObj.entry}</textarea>
            </div> <!-- closes input -->

            <div class="mood__label">
              <label for="mood">Mood For The Day</label>
            </div> <!-- closes label -->
            <div class="mood__input">
              <select id="mood" name="mood" value="${entryObj.mood}">
                <option value="Happy">&nbsp; 😃 &nbsp; Happy</option>
                <option value="Grateful">&nbsp; 🙏🏻 &nbsp; Grateful</option>
                <option value="Inspired">&nbsp; 🤩 &nbsp; Inspired</option>
                <option value="Excited">&nbsp; 🤗 &nbsp; Excited</option>
                <option value="Content">&nbsp; 🥰 &nbsp; Content</option>
                <option value="Tired">&nbsp; 🥱 &nbsp; Tired</option>
                <option value="Sad">&nbsp; 😥 &nbsp; Sad</option>
                <option value="Deflated">&nbsp; 😔 &nbsp; Deflated</option>
                <option value="Unwell">&nbsp; 🤢 &nbsp; Unwell</option>
              </select>
            </div> <!-- closes input -->

          </fieldset>

        </form>

		<div id="new-entry-btns" class="new-entry-btns">
		<button id="updatePost__${entryObj.id}" class="post-submit" type="button">UPDATE</button>
		<button id="post-cancel" class="post-cancel" type="button">CANCEL</button>
		</div> <!-- closes new-entry-btns -->

      </section> <!-- closes input-form -->
	`
}