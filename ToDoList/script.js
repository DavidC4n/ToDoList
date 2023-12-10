// Variable para asignar identificadores únicos a las tareas
let taskId = 0;

// Función para agregar una nueva tarea a la lista
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Verifica que el cuadro de entrada no esté vacío
    if (taskInput.value !== "") {
        // Crea un nuevo elemento div para representar la tarea
        const div = document.createElement("div");
        div.classList.add("task"); // Agrega la clase "task" al div
        div.innerHTML = `<input type="text" value="${taskInput.value}" readonly>
            <button onclick="editTask(${taskId})">Editar</button>
            <button onclick="removeTask(${taskId})">Eliminar</button>`;
        div.setAttribute("id", `task_${taskId}`); // Asigna un ID único al div
        taskList.appendChild(div); // Agrega la tarea al contenedor de la lista

        taskInput.value = ""; // Limpia el cuadro de entrada después de agregar una tarea
        taskId++; // Incrementa el identificador único para la próxima tarea
    }
}

// Función para editar una tarea seleccionada
function editTask(id) {
    const taskInput = document.getElementById("taskInput");
    const selectedTask = document.getElementById(`task_${id}`);
    const taskText = selectedTask.querySelector("input");

    // Activa o desactiva el modo de solo lectura del cuadro de entrada de texto
    if (taskText.readOnly) { //Verifica si el cuadro de entrada de texto está actualmente en modo de solo lectura.
        taskText.readOnly = false; // Si está en modo de solo lectura, lo cambia a modo de edición.
        taskText.focus(); // Coloca el foco en el cuadro de entrada de texto para que el usuario pueda comenzar a editar inmediatamente.
    } else { //Si no está en modo de solo lectura
        taskText.readOnly = true; //Cambia de nuevo al modo de solo lectura.
        taskInput.value = taskText.value; //Asigna el valor actual del cuadro de entrada de texto de la tarea seleccionada
    }
}

// Función para eliminar una tarea
function removeTask(id) {
    const task = document.getElementById(`task_${id}`);
    task.parentNode.removeChild(task); // Elimina la tarea del DOM
}

