let b = document.getElementById("text");
let a = document.getElementById("butt");
a.addEventListener("click", function () {
    let c = document.getElementById("parent");
    let x = document.createElement("div");
    x.innerHTML = ` <div class="container1">
    <p>${b.value}</p>
    <button onclick="removeElement(this)" id="remove">Remove</button>
    <button onclick="edit(this)" id="edit">Edit</button>
   </div>`;
    c.appendChild(x);
});

function removeElement(e) {
    e.parentElement.remove();
}

function edit(e) {
    let container = e.parentElement;
    let paragraph = container.querySelector("p");
    let input = container.querySelector("input.editbox");
    
    // If input element already exists, just show it and return
    if (input) {
        paragraph.style.display = "none"; // Hide paragraph while editing
        input.style.display = ""; // Show input
        return;
    }
    
    let text = paragraph.textContent;

    input = document.createElement("input");
    input.className = "editbox";
    input.type = "text";
    input.value = text;

    container.insertBefore(input, paragraph); // Insert input before paragraph
    paragraph.style.display = "none"; // Hide paragraph while editing

    let existingSaveButton = container.querySelector("#save");
    if (existingSaveButton) {
        existingSaveButton.remove();
    }
    
    let saveButton = document.createElement("button");
    saveButton.id = "save";
    saveButton.textContent = "Save";
    saveButton.setAttribute("onclick", "save(this)");
    container.append(saveButton);
}

function save(e) {
    let container = e.parentElement;
    let input = container.querySelector("input.editbox");
    let newText = input.value;

    let paragraph = container.querySelector("p");
    paragraph.textContent = newText;
    paragraph.style.display = ""; // Restore paragraph visibility

    input.remove();
    e.remove();
}

function text1(e) {
    e.style.border = "red solid 2px";
}


