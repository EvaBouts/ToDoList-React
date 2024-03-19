import Task from "./Task";

const Tasks = ({ taskList, changeStatus }) => {

    return (
        <>
            <h1>Liste des Tasks</h1>
            {
                taskList.map((task) => {
                    return < Task key={task.id}
                        id={task.id}
                        done={task.done}
                        label={task.label}
                        changeStatus={changeStatus} />
                })
            }
        </>
    )
}

export default Tasks;