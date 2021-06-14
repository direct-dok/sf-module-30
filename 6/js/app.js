const form = document.querySelector('form');
const resultElem = document.querySelector('.result');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const id = this.querySelector('input').value;
    const result = await fetchTask(id);
    (result.length) ? viewData(result) : resultElem.innerHTML = '<h2>Пользователь с указанным id не найден</h2>';
    
})

function fetchTask(num) {
    return fetch(` https://jsonplaceholder.typicode.com/users/${num}/todos`)
        .then(result => result.json())
}

function viewData(obj) {
    const ul = document.createElement('ul');
    ul.classList.add('task-items');
    let liElem = '';
    obj.forEach(el => {
        liElem += `
        <li>
            <div>${el.id}</div>
            <div>${el.title}</div>
        </li>
        `;
    });

    ul.innerHTML = liElem;
    resultElem.innerHTML = '';
    resultElem.append(ul);
}