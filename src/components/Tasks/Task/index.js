const Task = ({ label, done, id }) => {
    return (
        <div>
            <input type="checkbox" id={id} checked={done} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Task;