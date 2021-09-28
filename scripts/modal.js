export const notFilledInsert = () => {
  console.log("notFilledInsert has executed");
  return `
    <div class="modal-content">

        <span id="close-modal" class="close-modal">&times;</span>

        <div class="modal-alert">
        <h2>Please Fill Out All Information On Form Before Submitting</h2>
        </div> <!-- closes modal-alert -->

        <div class="modal__content--not-filled">
            <img src="./images/formnotfilled.png" alt="Please Fill Out All Info Before Submitting"/>
        </div> <!-- closes modal__content--not-filled -->

    </div> <!-- closes modal-content -->
`;
};