// Selectores para listas
const taskList = document.getElementById("todas-las-tareas");
const toDoList = document.getElementById("tareas-en-progreso");
const doneList = document.getElementById("tareas-terminadas");

// Arreglo
const tasks = [
    {done: false, text: "Hacer la entrega de web" },
    {done: true, text: "Tarea pendiente de STI" },
    {done: false, text: "Reflexión de Filosofia como cura para el alma" },
    {done: false, text: "Meditar" },
    {done: false, text: "Ir a Futbol" },
    {done: false, text: "Ponerle la comida a Bella" },
    {done: false, text: "Comprar ropa" },
    {done: false, text: "Ir a monitorias con Cris" },
    {done: false, text: "Investigar pymes" },
    {done: true, text: "Descansar" }
];

// Pinto aqui
function writeTasks(){
    taskList.innerHTML="";
    toDoList.innerHTML="";
    doneList.innerHTML="";

    tasks.forEach((task) => {
        const elem = document.createElement("li");
        elem.textContent = task.text;
        elem.className = task.done ? "checked":"unchecked";
        elem.classList.add ("item-style");
        elem.addEventListener("click",() =>toggleTask(task));
        
        const cloneElem = elem.cloneNode(true);
        cloneElem.addEventListener("click",()=>toggleTask(task));

        taskList.append(elem);
        
        if(task.done){
            doneList.append(cloneElem);
        }else{
            toDoList.append(cloneElem);
        }
    });
}
writeTasks();

function toggleTask(taskItem){
    taskItem.done=!taskItem.done;
    writeTasks();
}