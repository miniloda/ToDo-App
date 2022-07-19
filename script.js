document.getElementById("rounded").addEventListener("click", function() {
    console.log("?")
    let value = document.getElementById("input").value;
    const node = document.createElement("li");
    const textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementsByTagName("ul")[0].appendChild(node);
});
