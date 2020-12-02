document.getElementById("calculator2").style.display = 'none';
document.getElementById("calculator1").style.display = 'block';
document.getElementById("theory").addEventListener("click", function () {
    document.getElementById("calculator1").style.display = 'block';
    document.getElementById("calculator2").style.display = 'none';
    document.getElementById("theory").style.backgroundColor = "rgb(52,58,64)"
    document.getElementById("lab").style.backgroundColor = "rgb(0,109,226)"
});
document.getElementById("lab").addEventListener("click", function () {
    document.getElementById("calculator2").style.display = 'block';
    document.getElementById("calculator1").style.display = 'none';
    document.getElementById("lab").style.backgroundColor = "rgb(52,58,64)"
    document.getElementById("theory").style.backgroundColor = "rgb(0,109,226)"
});
