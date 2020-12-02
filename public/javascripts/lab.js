document.getElementById("formo1").addEventListener("submit", function (event) {
    event.preventDefault();
    var a1 = parseInt(document.getElementById("a1").value);
    var a2 = parseInt(document.getElementById("a2").value);
    var a3 = parseInt(document.getElementById("a3").value);
    var a4 = parseInt(document.getElementById("a4").value);
    var a5 = parseInt(document.getElementById("a5").value);
    var a6 = parseInt(document.getElementById("a6").value);
    var p6 = a1 + a2 + a3 + a4 + a5+ a6;
    (p6>40)? pass1() : fail1(p6)
});
function fail1(p6) {
    var mar = 40-p6
    var pm = (mar*10)/8
    document.getElementById("pre-text").innerHTML="To pass the course, You have to score atleast"
    var fn = pm + " marks out of 50 in FAT.";
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = fn;
    if(pm<25){
        pass1()
    }
}
function pass1() {
    document.getElementById("pre-text").innerHTML="To pass the course, It is enough for you to score just "
    var fn = "25 marks in FAT";
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML = fn;
}

document.getElementById("clear1").addEventListener("click", function () {
    document.getElementById("a1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("a3").value = "";
    document.getElementById("a4").value = "";
    document.getElementById("a5").value = "";
    document.getElementById("a6").value = "";
    document.getElementById("result").style.color = "black";
    document.getElementById("pre-text").innerHTML="Welcome to the "
    document.getElementById("result").innerHTML = "FAT Passing marks Calculator";
});