var callbackRequest = new XMLHttpRequest();

callbackRequest.responseType = 'text';

function SetCallback(formElement) {
    tokenRequest.open("GET", "https://marathon-web-api.herokuapp.com/get-token?id=" + sessionStorage.getItem("clientID"), true);
    callbackRequest.open(formElement.method, "https://marathon-web-api-staging.herokuapp.com/", true);

    callbackRequest.send(new FormData(formElement));
  }

function GetCallBack() {
    
}

function LogOut() {
  sessionStorage.setItem("clientID", null);
  sessionStorage.setItem("clientName", null);
  window.location.replace("https://mrthn.dev/login.html");
}

callbackRequest.onreadystatechange = function() {
  if (callbackRequest.readyState == 4) {
    console.log("Request Finished");
    var status = document.getElementById("callbackStatus");
    if (callbackRequest.status === 200) {
      console.log(callbackRequest.response);
      status.value = callbackRequest.response;
    } else {
      let responseObj = callbackRequest.response;
      console.error(callbackRequest.statusText);
      console.log(callbackRequest.status);
      status.value = "Error";
    }
  }
};
