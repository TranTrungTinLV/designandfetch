//renderTodo 
var API = './API.json'

function start() {
    for(var i = 0; i <= 100; i++){
        gettodo(renderTodo);
    }
}
start();

function gettodo(callback) {

        fetch(API)
            .then(function (response) {
                return response.json();
            })
            .then(callback);
}

function renderTodo(tasks) {
        var listtodo = document.querySelector('#listtodo');
        var htmls = tasks.map(function (task) {

            return `
            <li>
                <span>${task.id} :</span>
                <span style = "color:green">${task.title}</span>
                <span>${task.completed}</span>
                </li>
        `
        });
        listtodo.innerHTML = htmls.join(' ');
    
}