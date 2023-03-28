const Validate = (event)=>{


  let userName = document.getElementById("Username");
  let userNameError = document.getElementById("usernameErr");


if(userName.value ==""){
  userName.style.border = "solid red"
  event.preventDefault()
}
}

