var tokenVal;
const url = window.location.search;

window.onload = function() {
    const urlParams = new URLSearchParams(url);
    tokenVal = urlParams.get('token');
    var title = document.getElementById("pageTitle");
    var view = document.getElementById("validToken");
    if (!tokenVal)
    {
        title.innerHTML = "Error, No Token Found";
        view.style.display = "none";
    }
    else
    {
        title.innerHTML = "Sign In";
        view.style.display = "block";
    }
}

function setFitbitRequest()
{
    redirectFitbit("fitbit");
}

function redirectFitbit(service) {
    window.location.replace("https://marathon-web-api.herokuapp.com/login"+
    "?token="+tokenVal+
    "&service="+service+
    "&callback=https://marathon-18119.firebaseapp.com/privacypolicy.html");
}
