function alertTest() {
    let name = document.name_form.name.value;
    alert("Hello " + name + "!");
}



let background = true;

function changeBackground() {
    if (background){
        document.body.style.backgroundColor = "green";
        background = false;
    }

    else {
        document.body.style.backgroundColor = "gray";
        background = true;
    }
}

function validationCheck() {
    console.log('Validating user input:', document.contactForm.firstName.value)
    const validationRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (document.contactForm.firstName.value.trim() == "") {
        alert('Enter a valid first name!')

        return false;
    }

    if (validation.test(document.contactForm.firstName.value)) {
        alert('How about..... nah :(')

        return false;
    }

}