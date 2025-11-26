import React, { useState } from "react";

const ToDoList = () => {
    const [doList, setDoList] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (doList === "") return alert("Debes escribir algo que añadir a la lista");
        setData([...data, doList]);
        setDoList("");
    };

    const handleDelete = (i) => {
        setData(data.filter((element, index) => index !== i));
    };

    const handleChange = (e) => {
        setDoList(e.target.value);
    }

    console.log(data)

    return (
        <div className="paper">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={doList}
                    onChange={handleChange}
                    placeholder="¿Qué tenemos que hacer hoy...?"
                />
            </form>

            <ul>
                {data.map((task, i) => (
                    <div key={i}>
                        <li>
                            {task}
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(i)}>
                                X
                            </button>
                        </li>
                        <hr className="line" />
                    </div>
                ))}
            </ul>

            {data.length === 0 && (
                <p className="empty-message">Sin tareas pendientes</p>
            )}
        </div>
    );
};

export default ToDoList;