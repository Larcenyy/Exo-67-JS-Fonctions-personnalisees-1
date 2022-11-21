myFonc("remy, ", "ça va?")
function myFonc(prenom, text) {

    let element = document.getElementById("p1");
    element.innerText = prenom + text;
    console.log("Hello");

}
myFonc2("bonsoir mon ami, ", "tu veux tu une patate")
function myFonc2(other, text2) {
    let element2 = document.getElementById("p2");
    element2.innerText = other + text2;

}