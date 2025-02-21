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
    console.log('Validating user input:', document.validation_form.input.value)
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (document.validation_form.input.value.trim() == "") {
        alert('Enter a valid ')

        return false;
    }

    if (validation.test(document.validation_form.input.value)) {
        alert('How about..... nah :(')

        return false;
    }

}

function addText() {
    document.getElementById("header").innerHTML= "INST377 - Lab 4 Add Text"
}