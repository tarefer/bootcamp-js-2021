/* function promedio() {
  return 200;
}
console.log(promedio()); */

const paragraphs = document.getElementsByTagName("p");
//console.log("Parrafos de este documento: "+paragraphs.length);
if (paragraphs.length > 0) {
    let paragraph = paragraphs[0];
    paragraph.innerText = "Bienvenidos al bootcamp - By TareDev";
    paragraph = "new value";
    console.log(paragraph);
}

if (paragraphs.length > 1) {
    let paragraph = paragraphs[1];
    //paragraph.innerText = "Parrafos en el documento: " + paragraphs.length;
    const fecha = new Date();
    paragraph.innerText = "Parrafos en el documento: " + paragraphs.length + " (" + fecha + ")";
}