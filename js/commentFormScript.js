// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.commentForm.name.value;
    var email = document.commentForm.email.value;
    var preTask = document.commentForm.preTask.value;
    var postTask = document.commentForm.postTask.value;
    var rating = document.commentForm.rating.value;
    var reasons = document.commentForm.reasons.value;
   
    
  // Defining error variables with a default value
    var nameErr = emailErr = ratingErr = reasonsErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate rating
    if(rating == "") {
        printError("ratingErr", "Please select your rating");
    } else {
        printError("ratingErr", "");
        reasonsErr = false;
    }

    // Validate reasoning
    if(reasons == "") {
        printError("reasonsErr", "Please enter a reason ");
    } else {
        printError("reasonsErr", "");
        reasonsErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || ratingErr || reasonsErr  ) == true) {
       return false;
    } else {
       
       
        // Display a message for the successfull submission
        var dataPreview = "Thank You for your feedback";
        alert(dataPreview);
    }
};


