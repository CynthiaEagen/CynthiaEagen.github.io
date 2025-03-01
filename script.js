function getYearsSkating() {
    document.getElementById("years-skating").innerText = new Date().getFullYear() - 2004; 
}

function getYearsCoaching() {
    document.getElementById("years-coaching").innerText = new Date().getFullYear() - 2016;
}

getYearsSkating();
getYearsCoaching();