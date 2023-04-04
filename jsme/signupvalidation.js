const Validate = ()=>{
//signup validation

    let userName = document.getElementById("inputlastname");
    let firstName = document.getElementById("inputfirstname");
    let email = document.getElementById("inputEmail4");
    let password = document.getElementById("inputPassword4");
    let confirm_password = document.getElementById("inputPassword4");
    // let usernameErr1 = document.getElementById("usernameErr1");
  
  if(userName.value ==""){
    userName.style.border = "solid red"
    return false
  }

  if(firstName.value ==""){
    firstName.style.border = "solid red"
    return false
  }
  if(email.value ==""){
    email.style.border = "solid red"
    return false
  }
  if(password.value ==""){
    password.style.border = "solid red"
    return false
  }
  if(password.value !== confirm_password.value){
    confirm_password.style.border = "solid red"
    // usernameErr1.innerText = "password does not match"
    // usernameErr1.style = "color: red"
    return false
  }
  }