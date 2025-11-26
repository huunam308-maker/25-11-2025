const form = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const table = document.getElementById("userTable");
const list = document.getElementById("userList");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = nameInput.value.trim();
    if (!userName) return;

    const userEmail = emailInput.value.trim();
    if (!userEmail) return;

    const STT = list.children.length + 1;

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${STT}</td>
    <td>${userName}</td>
    <td>${userEmail}</td>
    <td><button class="deleteBtn">Xoá</button></td>
    `

    const deleteBtn = tr.querySelector("delete");

    deleteBtn.addEventListener("click", () => {
        tr.remove();
    });

    list.appendChild(tr);

    userName.value = "";
    userName.focus();

    userEmail.value = "";
    userEmail.focus();
})