var xhr = new XMLHttpRequest();

xhr.responseType = 'json';

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    console.log("Request Finished");
        // Redirect on Successful Login
    if (xhr.status === 200) {
      let responseObj = xhr.response;
      console.log(xhr.response);

        if (responseObj.success)    // Success
        {
            sessionStorage.setItem("clientID",responseObj.clientID);
            sessionStorage.setItem("clientName",document.getElementById("name").value);
            // Redirect
            window.location.replace("https://mrthn.dev/profile.html");
        }
        else    // Failed
        {
            console.error(xhr.statusText);
            console.log(xhr.status);
            status.innerHTML = "Error: Invalid Information";
        }

    } else {
      let responseObj = xhr.response;

      console.error(xhr.statusText);
      console.log(xhr.status);
      status.innerHTML = "Error: "+responseObj.error;
    }
    alertBox.style.display = "block";
    status.style.display = "block";
  }
};

function LoginClient(formElement)
{
    xhr.open(formElement.method, "https://marathon-web-api.herokuapp.com/signin", true);
    xhr.send(new FormData(formElement));  
}