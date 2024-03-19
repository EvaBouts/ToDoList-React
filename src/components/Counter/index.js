// pour créer un compteur de tâches en cours, on passe le state taskList en props au composant Counter
// et dans Counter on fait un filter pour vérifier le statut de chaque tâche : s'il est false, on applique le changement
// on compte le nombre d'entrées dont le statut est false avec la fonction .length

const Counter = ({ taskList }) => {
    const taskStatusFalse = taskList.filter((task) => task.done === false).length;
    return (
        <>
            <div>
                <h1>{taskStatusFalse} tâches en cours</h1>
            </div>
        </>
    )
}

export default Counter;