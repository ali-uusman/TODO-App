const currentUrl = window.location.pathname;

if (currentUrl.includes('personal.html')) {
    document.getElementById('personal').classList.add('active');
    document.getElementById('personalcon').classList.add('active');
    
} else if (currentUrl.includes('professional.html')) {
    document.getElementById('professional').classList.add('active');
    document.getElementById('proffesionalcon').classList.add('active');
}

// MANIPULATING HTML ELEMENTS 
let taskList=[];
const takeInput= document.getElementById('inputtask');
const addButton= document.getElementById('add');
const listOfTasks= document.getElementById('task-list');
const clearCompletedBtn = document.getElementById("deleteCompleted")

function renderTask (){
    listOfTasks.innerHTML='';
    taskList.forEach((task ,index)=> {
        const taskItem= document.createElement("li") ;
        taskItem.className = task.status ?  'completed' : '';
        const taskText = document.createElement("span");
        taskText.textContent= task.task;
        taskText.addEventListener('click', () => toggleTaskStatus(index));
        const deletebtn = document.createElement('button');
        deletebtn.className = 'delete';
        deletebtn.addEventListener('click', () =>deleteTask(index));
        taskItem.appendChild(taskText);
        taskItem.appendChild(deletebtn);
        listOfTasks.appendChild(taskItem);
    });

}

function addTask() {
    const task = takeInput.value.trim();
    if (task) {
        taskList.push({ task, status: false });
        takeInput.value = '';
        renderTask();
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTask();
}

function toggleTaskStatus(index) {
    taskList[index].status = !taskList[index].status;
    renderTask();
}

addButton.addEventListener('click', addTask);
takeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function clearCompletedTasks() {
    // Filter out completed tasks
    taskList = taskList.filter(task => !task.status);
    renderTask();
}

clearCompletedBtn.addEventListener('click', clearCompletedTasks);