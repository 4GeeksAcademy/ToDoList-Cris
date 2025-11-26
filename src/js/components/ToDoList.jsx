import React, { useState } from "react";

const ToDoList = () => {
    const [doList, setDoList] = useState("");
    const [data, setData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(doList === "") return alert("Debes escribir algo para incluirlo en la lista")
        setData([...data, doList])
        setDoList("")
    }

    const handleChange = (e) => {
        setDoList(e.target.value);
    }

    const handleDelete = (i) =>{
        setData(data.filter((_, index) => index !== i));
    }

    console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    value={doList}
                    name="todolist"
                    placeholder="¿Que tenemos que hacer hoy...?"
                />
                <input type="submit" />
            </form>

            {
                <ul>
                    {data.map((task, i) =>
                        <li key={i}>
                            {task}
                    <button onClick={() => handleDelete(i)}>
                        ❌
                    </button>
                        </li>)}
                </ul>
            }
        </>
    );
}

export default ToDoList;