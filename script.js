
if (screen.width <= 699) {
    document.location = "mobile.html";
}

function submit() {
    var id = document.getElementById("id").value;
    var pass = document.getElementById("pass").value;
    if(id=="harsh" && pass=="enter_1"){
        window.location = "wellcome.html"
    }
    else{
        alert("Wrong password or User-Id")
    }
}