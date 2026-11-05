
// Fonction pour vérifier le code
function checkPassword() {
    const password = "okok"; // Remplacez par votre propre code
  
    // Récupérer la valeur saisie par l'utilisateur
    const enteredPassword = document.getElementById("passwordInput").value;
  
    // Vérifier si le code correspond
    if (enteredPassword === password) {
      // Afficher le contenu principal si le code est correct
      document.getElementById("passwordForm").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    } else {
      // Afficher un message d'erreur si le code est incorrect
      alert("Code incorrect. Veuillez réessayer.");
    }
  }
  

function toggleEditMode() {
    const displayContent = document.getElementById("displayContent");
    const editTextarea = document.getElementById("editTextarea");
    const editButton = document.getElementById("editButton");

    if (editButton.textContent === "Edit") {
        // Passer en mode édition
        displayContent.style.display = "none";
        editTextarea.style.display = "block";
        editButton.textContent = "Publish";

        // Charger le contenu sauvegardé depuis localStorage dans la zone de texte
        const todayContent = localStorage.getItem("todayContent");
        if (todayContent) {
            editTextarea.value = todayContent;
        }
    } else if (editButton.textContent === "Publish") {
        // Publier le contenu en mode édition
        const updatedContent = editTextarea.value;

        // Sauvegarder le contenu dans localStorage
        localStorage.setItem("todayContent", updatedContent);

        displayContent.textContent = updatedContent;
        displayContent.style.display = "block";
        editTextarea.style.display = "none";
        editButton.textContent = "Edit";
    }
}
function toggleEditMode2() {
    const displayContent2 = document.getElementById("displayContent2");
    const editTextarea2 = document.getElementById("editTextarea2");
    const editButton2 = document.getElementById("editButton2");

    if (editButton2.textContent === "Edit") {
        // Passer en mode édition
        displayContent2.style.display = "none";
        editTextarea2.style.display = "block";
        editButton2.textContent = "Publish";

        // Charger le contenu sauvegardé depuis localStorage dans la zone de texte
        const vrakContent = localStorage.getItem("vrakContent");
        if (vrakContent) {
            editTextarea2.value = vrakContent;
        }
    } else if (editButton2.textContent === "Publish") {
        // Publier le contenu en mode édition
        const updatedContent2 = editTextarea2.value;

        // Sauvegarder le contenu dans localStorage
        localStorage.setItem("vrakContent", updatedContent2);

        displayContent2.textContent = updatedContent2;
        displayContent2.style.display = "block";
        editTextarea2.style.display = "none";
        editButton2.textContent = "Edit";
    }
}

// Charger le contenu sauvegardé depuis localStorage au chargement de la page
window.onload = function () {
    const displayContent = document.getElementById("displayContent");
    const displayContent2 = document.getElementById("displayContent2");
    const todayContent = localStorage.getItem("todayContent");
    const vrakContent = localStorage.getItem("vrakContent");
    if (todayContent) {
        displayContent.textContent = todayContent;
    }
    if (vrakContent) {
        displayContent2.textContent = vrakContent;
    }
    console.log("Je suis dans window.onload au début de la page");
    console.log("displayContent");
    console.log(displayContent);
};

function toggleProjectInput() {
    const projectInput = document.getElementById("projectInput");
    projectInput.style.display = projectInput.style.display === "none" ? "block" : "none";

    const addProjectButton = document.getElementById("addProjectButton");


    if (projectInput.style.display === "block") {
        addProjectButton.textContent = "Ajouter";
    } else {
        addProjectButton.textContent = "Ajouter un projet";
    }
}

function toggletaskInput() {
    const taskInput = document.getElementById("taskInput");
    taskInput.style.display = taskInput.style.display === "none" ? "block" : "none";

    const addTaskButton = document.getElementById("addTaskButton");


    if (taskInput.style.display === "block") {
        addTaskButton.textContent = "Ajouter";
    } else {
        addTaskButton.textContent = "Ajouter un projet";
    }
}

function viewProject(projectText) {
    // Vous pouvez implémenter la navigation vers la page de détails ici
    // Par exemple, en utilisant window.location.href pour afficher le contenu du projet
}


// Fonction pour récupérer les projets depuis le local storage
function getProjects() {
    var storedProjects = localStorage.getItem("projects");
    console.log("je suis dans la foncton getProject et storedProject correspond à:");
    console.log(storedProjects);
    return storedProjects ? JSON.parse(storedProjects) : [];
}

// Fonction pour sauvegarder les projets dans le local storage
function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

// Initialisation des projets depuis le local storage
//const projects = getProjects();
var storedProjects = localStorage.getItem("projects");
var projects = storedProjects ? JSON.parse(storedProjects) : [];

var storedTasks = localStorage.getItem("tasks");
var tasks = storedTasks ? JSON.parse(storedTasks) : [];

function addProject() {
    const projectTextarea = document.getElementById("projectTextarea");

    const projectText = projectTextarea.value.trim();

    if (projectText !== "") {
        // Générez une classe de couleur aléatoire (ici, 3 couleurs sont utilisées)
        const colorClasses = ["color1", "color2", "color3", "color4", "color5", "color6","color7", "color8", "color9", "color10", "color11", "color12"];
        const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

        // Ajoutez le projet avec la classe de couleur au local storage
        index++;
        projects.push({ id: index, text: projectText, colorClass: randomColorClass });
        console.log("index dans add project");
        console.log(index);
        // Sauvegardez la liste mise à jour
        localStorage.setItem("projects", JSON.stringify(projects));

        // Rafraîchissez l'affichage
        //index = 0;
        displayProjects();

        // Effacez le contenu de la zone de texte
        projectTextarea.value = "";

        console.log("local storage");
        console.log(localStorage);

    }

        // Masquez la zone de texte d'ajout
        toggleProjectInput();
    }

function addTask() {
    const taskTextarea = document.getElementById("taskTextarea");

    const taskText = taskTextarea.value.trim();

    if (taskText !== "") {
        // Générez une classe de couleur aléatoire (ici, 3 couleurs sont utilisées)
        //const colorClasses = ["color1", "color2", "color3", "color4", "color5", "color6","color7", "color8", "color9", "color10", "color11", "color12"];
        //const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

        // Ajoutez le projet avec la classe de couleur au local storage
        index_task++;
        tasks.push({ id: index_task, text: taskText});
        console.log("index dans add project");
        console.log(index);
        // Sauvegardez la liste mise à jour
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Rafraîchissez l'affichage
        //index = 0;
        displayTasks();

        // Effacez le contenu de la zone de texte
        taskTextarea.value = "";

        console.log("local storage");
        console.log(localStorage);

    }

        // Masquez la zone de texte d'ajout
        toggleTaskInput();
    }

function displayProjects() {
        const projectList = document.getElementById("projectList");
    
        // Effacez le contenu actuel
        projectList.innerHTML = "";
        
        // Ajoutez chaque projet à la liste
        projects.forEach((project) => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project", project.colorClass); // Ajoutez la classe de couleur
            projectDiv.textContent = project.text;
            projectDiv.onclick = function () {openTask(project.id);};
            //projectDiv.onclick = function () {viewProject(project.text);};
            //projectList.appendChild(projectDiv);
    
    
            // Créer un bouton pour supprimer le projet
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("close-button", "project");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function () {
                deleteProjectid(project.id);
            };
            // Ajoutez le bouton à la div du projet
            //document.getElementById("projectList").appendChild(deleteButton);
            //projectDiv.appendChild(deleteButton);
            //projectDiv.onclick = function () {viewProject(project.text);}
            projectList.appendChild(projectDiv);
            const sautligne = document.createElement('br');
            projectList.appendChild(deleteButton);
            projectList.appendChild(sautligne);
            index = project.id;
            
        });
    
        console.log("index dans display project");
        console.log(index);
    
    }

function openTask(id) {
    // Récupérer le contenu stocké dans localStorage pour cette tâche
    var taskNumber = projects.findIndex(project => project.id === id);
    var page_title = projects[taskNumber].text;
    

    //const newPage = window.open('', '_blank');
    const newPage = window.open('');
    newPage.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${page_title}</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
        <div class="container">
            <div class="column-left">
                <div class="today">
                    <h2 class="title">${page_title}</h2>
                    <div class="content">
                        <div id="displayContent_page" class="preformatted">Cliquez sur le bouton Edit pour ajouter du contenu.</div>
                        <textarea id="editTextarea_page" class="edit-mode"></textarea>
                        <button id="editButton_page" onclick="toggleEditMode_page()">Edit</button>
                    </div>
                </div>
                <div class="process">
                    <!-- Zone "process" (à compléter) -->
                </div>
            </div>
            <div class="column-right">
                <div class="ponctuel">
                    <button id="addtaskButton" onclick="toggletaskInput()">Ajouter une tâche</button>
                    <div id="taskInput" style="display: none;">
                    <textarea id="taskTextarea" class="task-input"></textarea>
                    <button id="addTaskButton" onclick="addTask()">Ajouter</button>
                </div>
                <div id="taskList"></div>
                </div>
                <div class="vrack">
                    <!-- Zone "vrack" (à compléter) -->
                </div>
                <div class="passe">
                    <!-- Zone "passé" (à compléter) -->
                </div>
            </div>
        </div>
        <script>
        
        var storedt = localStorage.getItem("ponctuelContent_${taskNumber}");
        var ponctuelContent_${taskNumber} = storedt ? JSON.parse(storedt) : [];
        let index_task_${taskNumber} = 0; 
        displayTasks();
        
        

        function displayTasks() {
            const taskList = document.getElementById("taskList");
        
            // Effacez le contenu actuel
            taskList.innerHTML = "";
            
            // Ajoutez chaque projet à la liste
            ponctuelContent_${taskNumber}.forEach((task) => {
                const taskDiv = document.createElement("div");
                taskDiv.classList.add("task"); // Ajoutez la classe de couleur
                taskDiv.textContent = task.text;
                //projectDiv.onclick = function () {viewProject(project.text);};
                //projectList.appendChild(projectDiv);
        
        
                // Créer un bouton pour supprimer le projet
                const deleteButton = document.createElement("button");
                deleteButton.classList.add("close-button-task");
                deleteButton.textContent = "X";
                deleteButton.onclick = function () {
                    deleteTaskid(task.id);
                };
                
                // Ajoutez le bouton à la div du projet
                taskDiv.appendChild(deleteButton);
        
                //projectDiv.onclick = function () {viewProject(project.text);}
                taskList.appendChild(taskDiv);
                index_task_${taskNumber} = task.id;
                
            });
        

        }


        function toggletaskInput() {
            const taskInput = document.getElementById("taskInput");
            taskInput.style.display = taskInput.style.display === "none" ? "block" : "none";
        
            const addTaskButton = document.getElementById("addTaskButton");
        
        
            if (taskInput.style.display === "block") {
                addTaskButton.textContent = "Ajouter";
            } else {
                addTaskButton.textContent = "Ajouter un projet";
            }
        }

        function addTask() {
            const taskTextarea = document.getElementById("taskTextarea");
        
            const taskText = taskTextarea.value.trim();
        
            if (taskText !== "") {
                // Générez une classe de couleur aléatoire (ici, 3 couleurs sont utilisées)
                //const colorClasses = ["color1", "color2", "color3", "color4", "color5", "color6","color7", "color8", "color9", "color10", "color11", "color12"];
                //const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
            

                // Ajoutez le projet avec la classe de couleur au local storage
                index_task_${taskNumber}++;
                console.log("l'index");
                console.log(index_task_${taskNumber});

                ponctuelContent_${taskNumber}.push({ id: index_task_${taskNumber}, text: taskText});
            
                // Sauvegardez la liste mise à jour
                localStorage.setItem("ponctuelContent_${taskNumber}", JSON.stringify(ponctuelContent_${taskNumber}));
        
                // Rafraîchissez l'affichage
                //index = 0;
                displayTasks();
        
                // Effacez le contenu de la zone de texte
                taskTextarea.value = "";
        
                console.log("local storage");
                console.log(localStorage);
        
            }
        
                // Masquez la zone de texte d'ajout
                toggletaskInput();
            }
        function toggleEditMode_page() {
            const displayContent = document.getElementById("displayContent_page");
            const editTextarea = document.getElementById("editTextarea_page");
            const editButton = document.getElementById("editButton_page");
        
            if (editButton.textContent === "Edit") {
                // Passer en mode édition
                displayContent.style.display = "none";
                editTextarea.style.display = "block";
                editButton.textContent = "Publish";
        
                // Charger le contenu sauvegardé depuis localStorage dans la zone de texte
                const todayContent = localStorage.getItem("taskContent_${taskNumber}");
                if (todayContent) {
                    editTextarea.value = todayContent;
                }
            } else if (editButton.textContent === "Publish") {
                // Publier le contenu en mode édition
                const updatedContent = editTextarea.value;
        
                // Sauvegarder le contenu dans localStorage
                localStorage.setItem("taskContent_${taskNumber}", updatedContent);
        
                displayContent.textContent = updatedContent;
                displayContent.style.display = "block";
                editTextarea.style.display = "none";
                editButton.textContent = "Edit";
            }
        }

        function deleteTaskid(id) {
            // Trouvez l'index du projet à supprimer
            var index_task = ponctuelContent_${taskNumber}.findIndex(task => task.id === id);
        
            // Supprimez le projet de l'array
            ponctuelContent_${taskNumber}.splice(index_task, 1);
        
            // Mettez à jour le localStorage
            localStorage.setItem("ponctuelContent_${taskNumber}", JSON.stringify(ponctuelContent_${taskNumber}));
        
            // Réaffichez les projets
            displayTasks();
        }
        //formatContentOnLoad();
        // Charger le contenu sauvegardé depuis localStorage au chargement de la page
        window.onload = function () {
            
            const displayContent = document.getElementById("displayContent_page");
            const tasklist = document.getElementById("taskList");
            const todayContent = localStorage.getItem("taskContent_${taskNumber}");
            const ponctuelContent = localStorage.getItem("ponctuelContent_${taskNumber}");
            
            if (todayContent) {
                displayContent.textContent = todayContent;
                formatContentOnLoad();
                tasklist.textContent = ponctuelContent;
                
            }
        };
         
        
        
        
        
        
        </script>
    </body>
    </html>
    
    `);
    
    newPage.document.close();
}

function viewProject(projectText) {
    // Rediriger l'utilisateur vers une nouvelle page avec le nom du projet dans le titre
    window.location.href = `project.html?project=${encodeURIComponent(projectText)}`;
}

function displayTasks() {
    const taskList = document.getElementById("taskList");

    // Effacez le contenu actuel
    taskList.innerHTML = "";
    
    // Ajoutez chaque projet à la liste
    tasks.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task"); // Ajoutez la classe de couleur
        taskDiv.textContent = task.text;
        //projectDiv.onclick = function () {viewProject(project.text);};
        //projectList.appendChild(projectDiv);


        // Créer un bouton pour supprimer le projet
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("close-button-task");
        deleteButton.textContent = "X";
        deleteButton.onclick = function () {
            deleteTaskid(task.id);
        };
        
        // Ajoutez le bouton à la div du projet
        taskDiv.appendChild(deleteButton);

        //projectDiv.onclick = function () {viewProject(project.text);}
        taskList.appendChild(taskDiv);
        index_task = task.id;
        
    });

    console.log("index dans display project");
    console.log(index);

}

function viewProject(projectText) {
    // Rediriger l'utilisateur vers une nouvelle page avec le nom du projet dans le titre
    window.location.href = `project.html?project=${encodeURIComponent(projectText)}`;
}

function deleteProjectid(id) {

    // Trouvez l'index du projet à supprimer
    var index = projects.findIndex(project => project.id === id);

    // Supprimez le projet de l'array
    projects.splice(index, 1);

    // Mettez à jour le localStorage
    localStorage.setItem("projects", JSON.stringify(projects));

    // Réaffichez les projets
    displayProjects();
}
function deleteTaskid(id) {
    // Trouvez l'index du projet à supprimer
    var index_task = tasks.findIndex(task => task.id === id);

    // Supprimez le projet de l'array
    tasks.splice(index_task, 1);

    // Mettez à jour le localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Réaffichez les projets
    displayTasks();
}
function deleteProject(nb) {
    // Supprimez le projet de l'array
    projects.splice(nb-1, 1);

    // Mettez à jour le localStorage
    localStorage.setItem("projects", JSON.stringify(projects));

    // Réaffichez les projets
    displayProjects();
    console.log("index dans la boucle suppr");
    console.log(index);
    console.log("numero id qui a été supprime");
    console.log(nb);
    
}
/*
function openTask(taskNumber) {
    // Récupérer le contenu stocké dans localStorage pour cette tâche
    const storedContent = localStorage.getItem(`taskContent_${taskNumber}`);

    const newPage = window.open('', '_blank');
    newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tâche ${taskNumber}</title>
        </head>
        <body>
            <h1>Tâche ${taskNumber}</h1>
            <div>
                <textarea id="taskContent" rows="4" cols="50">${storedContent || ''}</textarea>
                <button onclick="updateTaskContent(${taskNumber})">Ajouter</button>
            </div>
            <div id="displayContent"></div>
        </body>
        <script>
            // Afficher le contenu stocké au chargement de la page
            const storedContent = localStorage.getItem("taskContent_${taskNumber}");
            const displayContent = document.getElementById("displayContent");
            if (storedContent) {
                displayContent.textContent = storedContent;
            }

            function updateTaskContent(taskNumber) {
                const taskContent = document.getElementById("taskContent").value;

                // Afficher le contenu au-dessus de la zone de texte
                displayContent.textContent = taskContent;

                // Sauvegarder le contenu dans localStorage
                localStorage.setItem("taskContent_${taskNumber}", taskContent);
            }
        </script>
        </html>
    `);
    
    newPage.document.close();
} */



var storedProjects = localStorage.getItem("projects");
var projects = storedProjects ? JSON.parse(storedProjects) : [];
let index = 0;
let index_task = 0;
console.log("index");
console.log(index);

displayProjects();
displayTasks();




