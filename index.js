function validateform(){
    var name = document.myform.username.value;
    var password = document.myform.password.value;

    if(username==null || username==""){
        alert("Name cannot be blank");
        return false;
    }else if(password.length<6){
        alert("Password must be at least 7 characters long.");
        return false;
    }
}