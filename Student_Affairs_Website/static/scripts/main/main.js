const home = document.getElementById("home");
const profile = document.getElementById("profile");
const services = document.getElementById("services");
const instructions = document.getElementById("instructions");
const login = document.getElementById("login");
// const logout = document.getElementById("logout");
profile.style.display = "none";
logout.style.display = "none";
services.style.display = "none";
instructions.style.display = "none";
    if(!localStorage.firstTime){
        localStorage.setItem("firstTime", "true");
        window.location.pathname = './all-students/student.html'
    window.location.href = `./all-students/student.html`
    }
    if(!sessionStorage.loggedin){
        sessionStorage.setItem("loggedin",'false');
    }else if(sessionStorage.loggedin == 'true'){
        profile.style.display = "block";
        services.style.display = "block";
        instructions.style.display = "block";
        logout.style.display = "block";
        login.style.display = "none";
    }else if(sessionStorage.loggedin == 'false'){
        profile.style.display = "none";
        services.style.display = "none";
        instructions.style.display = "none";
        logout.style.display = "none";
        login.style.display = "block";
    }