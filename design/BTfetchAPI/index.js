//renderTodo 
let output = '';
const AddTasks = document.querySelector('.table-list');
const AddPost = document.querySelector('.Add-Post');
const TitleTasks = document.getElementById('title')
const CompletedTasks = document.getElementById('completed')
const Cusromize = document.querySelector('.custormize')
const renderTasks = function (e) {
    e.splice(0, 100).map(e => { //lấy 100 dòng đầu  tiên
        output += `
        <table  data-id = "${e.id}">
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.completed}</td>
                <td>
                <input type="button" value="Delete" class="h" id="btnDelete"></input>
                </td>
                <td>
                <input type="button" value="Edit" class="h" id="btnEdit"></input>
                </td>
        </table>
        `
    });
    AddTasks.innerHTML = output;
}
//GET 
var API = 'https://jsonplaceholder.typicode.com/todos'

fetch(API)
    .then(res => res.json())
    .then(data => renderTasks(data))

AddTasks.addEventListener('click', (e) => {
            console.log(e.target.id)
            e.preventDefault();
            let delButton = e.target.id == 'btnDelete'
            let editButton = e.target.id == 'btnEdit'
            let id = e.target.parentElement.dataset.id
            console.log(id)
            //Delete Remove methods DELETE
            if (delButton) {
                fetch(`${API}/${id}`, {
                        method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(() => location.reload())
            }
            
        });

            //Post
            AddPost.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log(TitleTasks.value)
                console.log('completing !')
                fetch(API, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },

                        body: JSON.stringify({
                            title: TitleTasks.value,
                            completed: CompletedTasks.value,
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        const dataArr = [];
                        dataArr.push(data);
                        renderTasks(dataArr);
                    })
            })