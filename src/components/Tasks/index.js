import Task from "./Task";
import tasks from "../data/tasks.js";

const Tasks = () => {
    return (
        <>
            <h1>Liste des Tasks</h1>
            {
                tasks.map((task) => {
                    return < Task id={task.id}
                        done={task.done}
                        label={task.label} />
                })
            }
        </>
    )
}

export default Tasks;