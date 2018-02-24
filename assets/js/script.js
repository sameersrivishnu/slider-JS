var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n); //Code for previous and next Slides 
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}



if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari  
    xmlhttp = new XMLHttpRequest();
} else { // code for IE6, IE5  
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET", "slide.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

var y=xmlDoc.getElementsByTagName("item");


 // Code for  data
for (n = 0; n<y.length; n++) {
    
document.getElementById('blocks' + n.toString()).innerHTML = blocks(n);

}
function blocks(n) {
    var y =
        xmlDoc.getElementsByTagName("name")[n].childNodes[0].nodeValue + "<br>" +
        xmlDoc.getElementsByTagName("price")[n].childNodes[0].nodeValue + "<br>" +
        xmlDoc.getElementsByTagName("discount")[n].childNodes[0].nodeValue;
    return y;
}



