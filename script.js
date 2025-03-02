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