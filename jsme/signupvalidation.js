const Validate = ()=>{
//signup validation

    const userName = document.getElementById("inputlastname");
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

  //const validate 2
  const Validate2 = ()=>{
  const useremail = document.getElementById("exampleInputEmail1");
  const userpassword = document.getElementById("exampleInputPassword1");

  if(useremail.value ==""){
    useremail.style.border = "solid red"
    return false
  }
  else{
    useremail.style.border = "solid green"
  }

  if(userpassword.value ==""){
    userpassword.style.border = "solid red"
    return false
  }
  else{
    userpassword.style.border = "solid green"
  }
  }


  //const validate 3
  const Validate3 = ()=>{
    const username = document.getElementById("name");
    const wardname  = document.getElementById("wardname");
    const date = document.getElementById("date");
    const unit_price = document.getElementById("unit_price");
    const quantity = document.getElementById("quantity");
    const payment_method = document.getElementById("payment_method");
    const directions  = document.getElementById("directions");
    const deliverymethod  = document.getElementById("delivery_method");
    const produce_type = document.getElementById("produce_type");


    
    if(username.value ==""){
      username.style.border = "solid red"
      return false
    }
    else{
      username.style.border = "solid green"
    }
    if(wardname.value ==""){
      wardname.style.border = "solid red"
      return false
    }
    else{
      wardname.style.border = "solid green"
    }
    if(date.value ==""){
      date.style.border = "solid red"
      return false
    }
    else{
      date.style.border = "solid green"
    }
    if(unit_price.value ==""){
      unit_price.style.border = "solid red"
      return false
    }
    else{
      unit_price.style.border = "solid green"
    }
    if(quantity.value ==""){
      quantity.style.border = "solid red"
      return false
    }
    else{
      quantity.style.border = "solid green"
    }
    if(payment_method.value ==""){
      payment_method.style.border = "solid red"
      return false
    }
    else{
      payment_method.style.border = "solid green"
    }
    if(directions.value ==""){
      directions.style.border = "solid red"
      return false
    }
    else{
      directions.style.border = "solid green"
    }
    if(deliverymethod.value ==""){
      deliverymethod.style.border = "solid red"
      return false
    }
    else{
      deliverymethod.style.border = "solid green"
    }
    if(produce_type.value ==""){
      produce_type.style.border = "solid red"
      return false
    }
    else{
      produce_type.style.border = "solid green"
    }

    }

    //const validate 4
const Validate4 = ()=>{
    const firstname = document.getElementById("firstname");
    const lastname  = document.getElementById("lastname");
    const uniquename  = document.getElementById("uniquename");
    const password = document.getElementById("password");
    const role = document.getElementById("role");
    const ninnumber = document.getElementById("ninnumber");
    const phonenumber = document.getElementById("phonenumber");
    const residenttype = document.getElementById("residenttype");
    const periodofstay  = document.getElementById("periodofstay");
    const regdate  = document.getElementById("regdate");
    const gender = document.getElementById("gender");
    const ward = document.getElementById("ward");
    const streetname = document.getElementById("streetname");
    const housenumber = document.getElementById("housenumber");
    const register = document.getElementById("register");
    const inspect = document.getElementById("inspect");
    const approve = document.getElementById("approve");

    if(firstname.value ==""){
      firstname.style.border = "solid red"
      return false
    }
    else{
      firstname.style.border = "solid green"
    }

    if(lastname.value ==""){
      lastname.style.border = "solid red"
      return false
    }
    else{
      lastname.style.border = "solid green"
    }

    if(uniquename.value ==""){
      uniquename.style.border = "solid red"
      return false
    }
    else{
      uniquename.style.border = "solid green"
    }

    if(password.value ==""){
      password.style.border = "solid red"
      return false
    }
    else{
      password.style.border = "solid green"
    }
    if(role.value ==""){
      role.style.border = "solid red"
      return false
    }
    else{
      role.style.border = "solid green"
    }

    if(ninnumber.value ==""){
      ninnumber.style.border = "solid red"
      return false
    }
    else{
      ninnumber.style.border = "solid green"
    }
    if(phonenumber.value ==""){
      phonenumber.style.border = "solid red"
      return false
    }
    else{
      phonenumber.style.border = "solid green"
    }
    if(residenttype.value ==""){
      residenttype.style.border = "solid red"
      return false
    }
    else{
      residenttype.style.border = "solid green"
    }
    if(periodofstay.value ==""){
      periodofstay.style.border = "solid red"
      return false
    }
    else{
      periodofstay.style.border = "solid green"
    }
    if(regdate.value ==""){
      regdate.style.border = "solid red"
      return false
    }
    else{
      regdate.style.border = "solid green"
    }
    if(gender.value ==""){
      gender.style.border = "solid red"
      return false
    }
    else{
      gender.style.border = "solid green"
    }
    if(ward.value ==""){
      ward.style.border = "solid red"
      return false
    }
    else{
      ward.style.border = "solid green"
    }
    if(streetname.value ==""){
      streetname.style.border = "solid red"
      return false
    }
    else{
      streetname.style.border = "solid green"
    }
    if(housenumber.value ==""){
      housenumber.style.border = "solid red"
      return false
    }
    else{
      housenumber.style.border = "solid green"
    }
    if(register.value ==""){
      register.style.border = "solid red"
      return false
    }
    else{
      register.style.border = "solid green"
    }
    if(inspect.value ==""){
      inspect.style.border = "solid red"
      return false
    }
    else{
      inspect.style.border = "solid green"
    }
    if(approve.value ==""){
      approve.style.border = "solid red"
      return false
    }
    else{
      approve.style.border = "solid green"
    }
}