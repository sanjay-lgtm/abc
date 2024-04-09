function validateForm(){

    var name=document.forms["RegForm"]["Name"];
    var email=document.forms["RegForm"]["EMail"];
    var password=document.forms["RegForm"]["Password"];
    var  confirmPassword=document.forms["RegForm"]["Confirm"];
    
    if(name.value =="")
    {
        alert("Please enter your Name");
        return false;
    }
    if(email.value =="")
    {
        alert("Please enter your email id");
        return false;
    }
    if(password.value =="")
    {
        alert("Please enter your Password");
        return false;
    }
    if(confirmPassword.value =="")
    {
        alert("Please enter your Confirm Password");
        return false;
    }
    if(password.value===confirmPassword.value){
        if(registerinLocalStorage()){
            alert("Sign Up Completed!!");
            return true;
        }else{
            return false;
        }
    }
    else{
        alert("Password didn't match");
        return false;
    }
    return true

  }
  let users = JSON.parse(localStorage.getItem('userList'))? JSON.parse(localStorage.getItem('userList')):[];

  console.log(users);

  function registerinLocalStorage(){
    var name=document.forms["RegForm"]["Name"].value;
    var email=document.forms["RegForm"]["EMail"].value;
    var password=document.forms["RegForm"]["Password"].value;
    var  confirmPassword=document.forms["RegForm"]["Confirm"].value;


    let newUser ={
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword
    } 
    let userExists = users.some(user => user.email === newUser.email);
    
    if(userExists){
        alert("user already exists");
        return false;
    }
    else{
        users.push(newUser);
    }

    let userString =JSON.stringify(users);
    localStorage.setItem("userList",userString);
    return true;
  }