// Validation the user input in Contact Us form

const button = document.getElementById("submit");

// Regex patterns
const namePattern = /^[a-zA-Z\s'-]{2,}$/;
const emailPattern = /^[\w.-]+@[\w.-]+\.\w{2,}$/;


// Event trigger when submit button is clicked
button.addEventListener("click", (e) => {
    e.preventDefault();

    // Get filed values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // set the validUserInput to true
    let validUserInput = true;

    //Validate name
    if (!namePattern.test(name)){
        document.getElementById("nameError").textContent = "Please enter a valid name";
        validUserInput = false;
        return;
    }

    //Validate email
    if (!emailPattern.test(email)||!email){
        document.getElementById("emailError").textContent = "Please enter a valid email";
        validUserInput = false;
        return;
    }

    //Validate message
    if (!message){
        document.getElementById("messageError").textContent = "Message cannot be empty";
        validUserInput = false;
        return;
    }

    if (validUserInput){

        // Create a user input object
        const userInputData = {
            name,
            email,
            message,
        };

        //Get submissions from localStorage or create a new array
        let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

        //Add new submission
        submissions.push(userInputData);

        localStorage.setItem("submissions", JSON.stringify(submissions));

        alert("Your message has been sent successfully!");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
});