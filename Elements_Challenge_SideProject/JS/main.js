function addTextNode() {
    const node = document.createTextNode(" Click again.");
    const element = document.getElementById("demo");
    element.appendChild(node);
    countNodes(element);
}
  
function normPara() {
    const element = document.getElementById("demo");
    element.normalize();
    countNodes(element);
}
  
function countNodes(element) {
    const span = document.getElementById("cc");
    span.innerHTML = element.childNodes.length;
}