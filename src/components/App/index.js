import Tasks from "../Tasks";
import Form from "../Form";
import Counter from "../Counter";

const App = () => {
    return (
        <>
            <div>
                <h1>To-do list</h1>
                < Form />
                < Counter />
                < Tasks />
            </div>
        </>
    )
}

export default App;