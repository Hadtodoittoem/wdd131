
const form = document.querySelector("#ticketForm");
const customerType = document.querySelector("#customerType");
const IDContainer = document.querySelector("#IDContainer");
const IDLabel = document.querySelector("#IDLabel");
const IDInput = document.querySelector("#IDInput");
const output = document.querySelector("#output");

customerType.addEventListener("change", () => {
    if (customerType.value === "student") {
        IDContainer.hidden = false;
        IDLabel.textContent = "Student I#";
    }
    else if(customerType.value === "guest") {
        IDContainer.hidden = false;
        IDLabel.textContent = "Access Code";
    }
    else {
        IDContainer.hidden = true;
    }
});

function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    output.innerHTML = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = customerType.value;
    const date = form.eventDate.value;
    const idValue = IDInput.value.trim();


    if (isPastDate(date)) {
        output.textContent = "Event date must be later than today.";
    }

    if (type === "student") {
        if (idValue.length !== 9) {
            output.textContent = "Student I# must be exactly 9 digits.";
            return;
        }
    }

    if (type === "guest") {
        if (idValue !== "EVENT131") {
            output.textContent = "Access Code must be EVENT131.";
            return;
        }
    }

    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>Name: ${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Type: ${type}</p>
    <p>Date: ${date}</p>
  `;

    form.reset();
    IDContainer.hidden = true;
});