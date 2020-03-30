var tokenRequest = new XMLHttpRequest();

tokenRequest.responseType = 'text';

window.onload = function() {
    
  if (sessionStorage.getItem("clientName") && sessionStorage.getItem("clientID"))
  {
    document.getElementById("loginValid").style.display = "block";
    document.getElementById("loginInvalid").style.display = "none";
    document.getElementById("welcome").innerHTML = "Welcome " + sessionStorage.getItem("clientName");
  }
  else
  {
    document.getElementById("loginValid").style.display = "none";
    document.getElementById("loginInvalid").style.display = "block";
  }
}

function GetToken() {
    tokenRequest.open("GET", "https://marathon-web-api.herokuapp.com/get-token?id=" + sessionStorage.getItem("clientID"), true);
    tokenRequest.send();
}

tokenRequest.onreadystatechange = function() {
  if (tokenRequest.readyState == 4) {
    console.log("Request Finished");
    var status = document.getElementById("tokenField");
    if (tokenRequest.status === 200) {
      console.log(tokenRequest.response);
      status.value = tokenRequest.response;
    } else {
      let responseObj = tokenRequest.response;
      console.error(tokenRequest.statusText);
      console.log(tokenRequest.status);
      status.value = "Error";
    }
  }
};
