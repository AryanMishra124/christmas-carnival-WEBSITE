function registerNow() {

    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let college = document.getElementById("college").value;
    let course = document.getElementById("course").value;

    if (mobile.length != 10) {
        document.getElementById("errorMessage").textContent = "Please enter a 10 digit mobile number.";
        return false;
    }

    document.getElementById("errorMessage").textContent = "";

    document.getElementById("welcomeName").textContent = "Thank you, " + name + "! Welcome to the celebration!";
    document.getElementById("showName").textContent = name;
    document.getElementById("showEmail").textContent = email;
    document.getElementById("showMobile").textContent = mobile;
    document.getElementById("showCollege").textContent = college;
    document.getElementById("showCourse").textContent = course;

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";

    window.scrollTo(0, 0);

    return false;
}

function goHome() {

    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";

    window.scrollTo(0, 0);
}