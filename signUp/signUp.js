let Btn = document.getElementById("singUp");
Btn.addEventListener("click", function () {
  let emaildata = document.getElementById("Email").value;
  let passworddata = document.getElementById("password").value;

  let user =JSON.parse(localStorage.getItem("Singup")) || [];

  let obj = {
    Email: emaildata,
    Password: passworddata,
  };

  user.push(obj)
  localStorage.setItem("Singup",JSON.stringify(user));
});

function signUp(){
  window.location.href ="../signIn/signIn.html"
}