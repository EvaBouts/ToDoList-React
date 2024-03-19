import Tasks from "../Tasks";
import Form from "../Form";
import Counter from "../Counter";
import { useState } from "react";
import tasks from "../data/tasks.js";

const App = () => {

    // déclaration d'un useState qui contient la liste des tâches
    // la valeur initiale est le tableau des tâches tasks
    // on n'oublie pas de transmettre la valeur de ce state en props à Tasks
    const [taskList, setTaskList] = useState([...tasks]);

    // création d'une fonction de modification du state pour changer le statut d'une tâche
    // on passera cette fonction en props à Tasks pour qu'il puisse la transmettre à Task
    const changeStatus = (id) => {
        // on cherche l'id de la tâche à modifier dans le tableau 
        // et on modifie la valeur de done de cette tâche uniquement
        // on utilise .map pour parcourir le tableau
        const newStatus = taskList.map((task) => {
            // Si l'id de la tâche correspond à l'id passé en paramètre
            if (task.id === id) {
                // on retourne un nouvel objet qui contient le contenu modifié
                return {
                    ...task,
                    done: !task.done
                }
            }
            // sinon on retourne la tâche telle quelle
            return task;
        });
        // mise à jour du state avec le nouveau tableau
        setTaskList(newStatus);
    }

    return (
        <>
            <div>
                <h1>To-do list</h1>
                < Form />
                < Counter taskList={taskList} />
                < Tasks taskList={taskList} changeStatus={changeStatus} />
            </div>
        </>
    );
    ;
}

export default App;