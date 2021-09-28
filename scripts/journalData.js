/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.

const journal = [
    {
        id: 1,
        date: "07/24/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },

    {
        id: 2,
        date: "07/26/2021",
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout.",
        mood: "Happy"
    },

    {
        id: 3,
        date: "07/28/2021",
        concept: "Javascript",
        entry: "Learning javascript is fun and exhausting at the same time. I'm learning to trust the process.",
        mood: "Grateful"
    },

    {
        id: 4,
        date: "07/30/2021",
        concept: "Databases",
        entry: "Figuring out how javascript works with multiple js files is complicated but getting easier the more I play with it.",
        mood: "Inspired"
    },

    {
        id: 5,
        date: "08/04/2021",
        concept: "Group Projects",
        entry: "I enjoy working with my classmates. I learn alot and I like offering tips about stuff I already know too. NSS is cool :)",
        mood: "Happy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

// let origDate = journal[0].date;
// console.log(origDate);


// let date = toDateString('07/24/2021');
// console.log(date);