const Task = ({ label, done, id, changeStatus }) => {

    // mise en place d'un écouteur d'événement 
    // qui appelle un handler pour vérifier que la checkbox a été modifiée
    const handleChange = () => {
        changeStatus(id);
    };

    return (
        // ajout en props d'un onChange pour que l'événement soit écouté
        // ce props appelle la fonction handleChange
        <div>
            <input type="checkbox" id={id} checked={done} onChange={handleChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Task;