function check(){
    alert("checking....")
    let storename = localStorage.getItem("username");
    let storepwd = localStorage.getItem("password");
    let name = document.getElementById("username");
    let password = document.getElementById("password");

    if(name == ""){

        alert("enter username");

    }
    else if(password == ""){
        alert("enter password");
    }

    else if(name == storename && password == storepwd){
        alert("done");
        window.location.href ="/dashboard.html";
    }

    else{
        alert("enter vailid username and password");
    }

}