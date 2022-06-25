//renderTodo 
var API = 'http://localhost:3000/lists'

function start() {
    gettodo(renderTodo);
    handleCreateForm();
}

start();


function gettodo(callback) {

    fetch(API)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function Addtasks(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };
    fetch(API, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}

function Delete(id) {
    var Delete = document.querySelector('#btnDelete')
    Delete.addEventListener('click', function () {
        var options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        };
        fetch(API + '/' + user.id + '/' + id, options)
            .then(function (response) {
                response.json();
            })
            .then(callback);
    })
}

function renderTodo(tasks) {
    var listtodo = document.querySelector('#listtodo');
    var htmls = tasks.map(function (task) {

        return `
               <table>
               <td>${task.id}</td>
               <td>${task.title}</td>
               <td>${task.completed}</td>
               </table>
                
        `
    });
    listtodo.innerHTML = htmls.join(' ');

}

function handleCreateForm() {
    var Addtask = document.querySelector('#btnAdd')

    Addtask.addEventListener('click', function () {
        var title = document.querySelector('input[name = "title"]').value;
        console.log(title)
        var completed = document.querySelector('input[name = "completed"]').value;
        console.log(completed)
        var form = {
            title: title,
            completed: completed
        };

        Addtasks(form)
    })
}