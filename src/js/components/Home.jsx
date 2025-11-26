import React from "react";
import ToDoList from "./ToDoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
            <ToDoList />
		</div>
	);
};

export default Home;