let titleInput = document.getElementById("title_input")
let title = document.getElementById("main_title")

const titleChange = e => {
    e.preventDefault()
    title.innerText = titleInput.value
}

titleInput.addEventListener("input", titleChange)
const submit = document.getElementById("submit_button")
const clickSubmit = e => {
    e.preventDefault()
    if (document.getElementById("title_input").value == "") {
        empty_field = true
        alert("Please fill in all fields")
    }
    else if (document.getElementById("noun").value == "") {
        alert("Please fill in all fields")
    }
    else if (document.getElementById("verb").value == "") {
        alert("Please fill in all fields")
    }
    else if (document.getElementById("adjective").value == "") {
        alert("Please fill in all fields")
    }
    else {
        document.getElementById("story_result").innerText = "Last night I ate a " + document.getElementById("noun").value + ", and today I just had to " + document.getElementById("verb").value + ". What a " + document.getElementById("adjective").value + " day!"
        let formContainer = document.getElementsByClassName("form_container")
        for (i = 0; i < formContainer.length; i++) {
            let form = formContainer[i]
            form.style.visibility = "hidden"
        }
    }
}

submit.addEventListener("click", clickSubmit)