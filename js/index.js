document.getElementById("submit_btn").addEventListener("click", function(){
    
    const emailFlied = document.getElementById("email_flied");
    const email = emailFlied.value;

    const paswordFlied = document.getElementById("password_flied");
    const password = paswordFlied.value;
    
    if(email === "shangida@gmail.com" && password === "ritu"){
        location.href = "bank.html"
    }

    else{
        alert("Invaild password")
    }

})