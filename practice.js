//--- accessing the dom using the form name and element ---//
const email= document.signup.email
const password= document.signup.password





//-- displaying error by id in form --//
const emailError= document.getElementById("emailError")
const passwordError= document.getElementById("passwordError")

//-- adding event listeners --//
email.addEventListener('blur', emailVerify, true)
email.addEventListener('blur', passwordVerify, true)



//-- regexs --//
const nameRegex = /^.{1,20}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:
const emailRegex = "^(.+)@(.+)$";//only cares about '@



//-- validation for an empty field --//
function Validate(){
    if (email.value === "") {
      emailError.textContent="email is required"
      email.border.style = "1px solid red"
      email.focus()
       return false 
    
      }
      if (password.value === "") {
        passwordError.textContent= "password is required"
        password.border.style = "1px solid red"
        password.focus()
        return false
        
      }}

// --validation for regexs --//
function emailVerify() {
    if (email.value != "" && email.value.match(emailRegex)) {
        email.style.border = "1px solid green" 
        emailError.innerHTML =""
        return true
    } else {
        email.style.border = "1px solid red"
        emailError.textContent = "fill in the right email"
        email.focus()
        return false
    }}

function passwordVerify() {
    if(password.value != "" && password.value.match(passwordRegex)) {
        password.style.border = "1px solid green"
        passwordError.innerHTML =""
        return true
    }else{
        password.style.border = "1px solid red"
        passwordError.textContent = "password should have eight charcters"
        password.focus()
        return false
    } }