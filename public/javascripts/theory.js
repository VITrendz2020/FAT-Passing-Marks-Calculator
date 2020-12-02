document.getElementById("formo").addEventListener("submit", function (event) {
    event.preventDefault();
    var cat1 = parseInt(document.getElementById("cat1").value);
    var cat2 = parseInt(document.getElementById("cat2").value);
    var quiz1 = parseInt(document.getElementById("quiz1").value);
    var da1 = parseInt(document.getElementById("da1").value);
    var da2 = parseInt(document.getElementById("da2").value);
    var internals = quiz1 + da1 + da2 + ((cat1 + cat2) / 2);
    (internals < 40) ? fail(internals) : pass();
});

function fail(pm) {
    var fatt = (40 - pm)*2.5;
    document.getElementById("pre-text").innerHTML="To pass the course, You have to score "
    var fn = fatt + " marks out of 100 in FAT.";
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = fn;
    if(fatt<40){
        pass()
    }
}
function pass() {
    document.getElementById("pre-text").innerHTML="To pass the course, It is enough for you to score just "
    var fn = "40 marks in FAT";
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML = fn;
}
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("cat1").value = "";
    document.getElementById("cat2").value = "";
    document.getElementById("da1").value = "";
    document.getElementById("quiz1").value = "";
    document.getElementById("da2").value = "";
    document.getElementById("result").style.color = "black";
    document.getElementById("pre-text").innerHTML="Welcome to the "
    document.getElementById("result").innerHTML = "FAT Passing marks Calculator";


});