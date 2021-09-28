/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const journalEntryForm = (entryObj) => {
    const today = new Date();
    const todayFormatted = today.toDateString();
    console.log("journalEntryForm has executed");
    return `
    <section class="input__form">

    <h2>Add A Journal Entry</h2>

    <form id="form" method="post" name="form" action="">

    <fieldset>

        <div class="label">
            <label for="journalDate">Date of Entry</label>
            </div> <!-- closes label -->
            <div class="input">
            <input type="date" name="journalDate" id="journalDate" value="">
        </div> <!-- closes input -->

        <div class="label">
          <label for="concepts">Title</label>
        </div> <!-- closes label -->
        <div class="input">
          <input type="text" name="concepts" id="concepts" placeholder="Type concept here" value="">
        </div> <!-- closes input -->

        <div class="label">
          <label for="journalEntry">Journal Entry</label>
          </div> <!-- closes label -->
        <div class="input">
          <textarea name="journalEntry" id="journalEntry" placeholder="Write something here" value=""></textarea>
        </div> <!-- closes input -->

        <div class="mood__label">
          <label for="mood">Mood For The Day</label>
        </div> <!-- closes label -->
        <div class="mood__input">
          <select id="mood" name="mood" value="">
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

    <div id="bothBtns" class="bothBtns">

      <button id="btnId" class="btn__record" type="button">RECORD ENTRY</button>

      <button id="cancelBtnId" class="btn__cancel" type="button">CANCEL</button>

    </div> <!-- closes bothBtns -->

  </section> <!-- closes input-form --> 
    `    
}

export const JournalEntryComponent = (entryObj) => {
    let pageDate = formatDate(entryObj.date);
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">

            <div class="entry__date">${pageDate}</div>
            <h2 class="entry__concept">${entryObj.concept}</h2>
            <div class="entry__entry">${entryObj.entry}</div>

            <div class="new-entry-btns">
            <button id="new-post__submit" class="post-submit">SAVE</button>
            <button id="new-post__cancel" class="post-cancel">CANCEL</button>
        </div> <!-- closes new-entry-btns -->

        </section>`
}