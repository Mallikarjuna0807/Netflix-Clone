let btn = document.getElementById("signIn");
btn.addEventListener("click", function (ele) {
  let newdata = JSON.parse(localStorage.getItem("Singup"));
  let emailvalue = document.getElementById("emailcheck").value;
  let passwordvalue = document.getElementById("passwordcheck").value;
  for (let i = 0; i < newdata.length; i++) {
    let email = newdata[i].Email;
    let password = newdata[i].Password;
    if (email === emailvalue && password === passwordvalue) {
      console.log(email, password);
      alert("credentials same");
      window.location.href="../movies.html"
    } else {
      alert("donot match email or password");
    }
  }
});

function signUp(){
  window.location.href = "../signUp/signUp.html"
}