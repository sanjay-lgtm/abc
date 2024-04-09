let users=JSON.parse(localStorage.getItem('userList'));
console.log(users);

function validateForm()
{
    var email =document.forms["RegForm"]["EMail"].value;
    var password =document.forms["RegForm"]["Password"].value;

    if(email =="")
    {
        alert("Please enter your Email ID");
        return false;
    }
    if(password =="")
    {
        alert("Please enter your Password");
        return false;
    }

    if(users.some(person=>(person.email===email && person.password === password))){
        alert("Logged in Successfully !!");
        return true;
    }
    else{
        alert("User not found Please Enter correct Id Password or if new user sign up first" );
        return false;
    }
}