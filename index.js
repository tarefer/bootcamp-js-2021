/* function promedio() {
  return 200;
}
console.log(promedio()); */

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
if (paragraphs.length > 0) {
    let paragraph = paragraphs[0];
    let title = paragraphs[1];
    paragraph.innerText = "Bienvenidos al bootcamp - By TareDev";
    title.innerText = "Javascript, Node & React";
}