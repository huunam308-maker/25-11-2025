const form = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const table = document.getElementById("productTable");
const items = document.getElementById("productItems");


form.addEventListener("submit", (event) => {
    event.preventDefault();


    const productName = productInput.value.trim();
    if (!productName) return;


    const productPrice = priceInput.value.trim();
    if (!productPrice) return;

    const STT = items.children.length + 1;

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${STT}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td><button class="deleteBtn">Xoá</button></td>
    `;

    const deleteBtn = tr.querySelector("delete");

    deleteBtn.addEventListener("click", () => {
        tr.remove();
    });

    items.appendChild(tr);

    productInput.value = "";
    productInput.focus();
    
    priceInput.value ="";
    priceInput.focus();
})
