function getYearsSkating() {
    let elements = document.getElementsByClassName("years-skating");
    for (i = 0; i < elements.length; i++)
        elements.item(i).innerText = new Date().getFullYear() - 2004;
}

function getYearsCoaching() {
    let elements = document.getElementsByClassName("years-coaching");
    for (i = 0; i < elements.length; i++)
        elements.item(i).innerText = new Date().getFullYear() - 2016;
}

getYearsSkating();
getYearsCoaching();

const resumeButton = document.getElementById("resume-button");
const resumeContainer = document.getElementById("resume-container");

resumeButton.addEventListener('click', () => { 
    if (resumeButton.classList.contains('collapsed')) {
        resumeButton.innerText = "Wanna see my resume?";
    }
    else if (!resumeButton.classList.contains('collapsed')) {
        resumeButton.innerText = "Seen enough?";
        setTimeout(() => {
            document.getElementById('contact-info').scrollIntoView();
        }, 250)
        
    }
})

const checkboxRows = document.getElementsByClassName("checkbox-row");
const checkboxText = document.getElementsByClassName("checkbox-text");

for (i = 0; i < checkboxRows.length; i++) {
    checkboxRows.item(i).setAttribute("id", "line-" + i);
    checkboxRows.item(i).addEventListener('click', (event) => {
        if (!event.target.classList.contains("text-decoration-line-through"))
            event.target.classList.add("text-decoration-line-through");
        else
            event.target.classList.remove("text-decoration-line-through");
    });
}