function check() {

          var valid = true, error = "", field = "";
          //Check First Name
          field = document.getElementById("first-name");
          error = document.getElementById("fname-err");

          if (!field.checkValidity()) {
                    valid = false;
                    field.classList.add("err");
                    error.style.display = "initial";
                    error.innerHTML = '<img src="./images/icon-error.svg" alt="icon-error"></img>First Name cannot be empty';
          } else {
                    field.classList.remove("err");
                    error.innerHTML = "";
     
          }   
          
          //Check Last Name
          field = document.getElementById("last-name");
          error = document.getElementById("lname-err");

          if (!field.checkValidity()) {
                    valid = false;
                    field.classList.add("err");
                    error.style.display = "initial";
                    error.innerHTML = '<img src="./images/icon-error.svg" alt="icon-error"></img>Last Name cannot be empty';
          } else {
                    field.classList.remove("err");
                    error.innerHTML = "";
     
          }

          //Check Mail
          field = document.getElementById("mail");
          error = document.getElementById("mail-err");

          if (!field.checkValidity()) {
                    valid = false;
                    field.classList.add("err");
                    error.style.display = "initial";
                    error.innerHTML = '<img src="./images/icon-error.svg" alt="icon-error"></img>Looks like this is not an email';
          } else {
                    field.classList.remove("err");
                    error.innerHTML = "";
     
          }

          //Check Password
          field = document.getElementById("password");
          error = document.getElementById("pwd-err");
          
          if (!field.checkValidity()) {
                    valid = false;
                    field.classList.add("err");
                    error.style.display = "initial";
                    error.innerHTML = '<img src="./images/icon-error.svg" alt="icon-error" id="pwd-err-img"></img>Password cannot be empty';
                    image = document.getElementById("pwd-err-img");
                    image.style.left = "140px"
          } else {
                    field.classList.remove("err");
                    error.innerHTML = "";
     
          }



          return valid;
}