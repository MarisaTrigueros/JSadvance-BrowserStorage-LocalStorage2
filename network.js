document.addEventListener('DOMContentLoaded', async function(){
  
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos/4");

        if (!response.ok){
            throw new Error ("Error en el response:" , response.status)
        };

        const todo = await response.json();

        // Crear el títutlo
        const titleTodo = document.createElement("h2");
        titleTodo.textContent = todo.title;

        // Crear el input
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        // Meter elementos en el contenedor
        const container = document.getElementById("container");
        container.appendChild(titleTodo);
        container.appendChild(checkbox);

    } catch (error){
        console.error("Error en el fetch: ", error);
        return ("Error en el fetch: ", error);
    }
    
})