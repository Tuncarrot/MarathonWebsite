
function apiRequest(formElement) 
{
    var xhr = new XMLHttpRequest();
    xhr.open(formElement.method, "https://marathon-web-api.herokuapp.com/signup", true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
          } else {
            console.error(xhr.statusText);
          }
        }
      };
    xhr.send(new FormData(formElement));
    document.getElementById("status").value = xhr.responseText;
    return false;
}

function registerClient(formElement)
{
    var clientField = document.getElementById("name").value;
    var passwordField = document.getElementById("password").value;

    if (clientField)
    {

        if (passwordField)
        {
            apiRequest(formElement);
            //alert("Request Sent");
        }
        else
        {
            document.getElementById("clientErrorMsg").innerHTML = "The password is invalid";
        }
    }
    else
    {
        document.getElementById("passwordErrorMsg").innerHTML = "The client name is invalid";
    }

}