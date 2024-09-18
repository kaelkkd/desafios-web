let users = [];
let idCounter = 1;

function createUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) return alert('Insira seu nome, email e senha');

    users.push({ id: idCounter++, name, email, password });
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    displayUsers();
}

function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        userList.innerHTML += `
            <li>
                <strong>Nome:</strong> ${user.name} <strong>Email:</strong> ${user.email} <strong>Senha:</strong> ${user.password}
                <button onclick="editUser(${user.id})">Editar</button>
                <button onclick="deleteUser(${user.id})">Deletar</button>
            </li>`;
    });
}

function editUser(id) {
    const user = users.find(u => u.id === id);
    const newName = prompt('Digite seu novo nome:', user.name);
    const newEmail = prompt('Digite seu novo email:', user.email);
    const newPassword = prompt('Digite sua senha nova:', user.password);

    if (!newName || !newEmail || !newPassword) return;

    user.name = newName;
    user.email = newEmail;
    user.password = newPassword;
    displayUsers();
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayUsers();
}
