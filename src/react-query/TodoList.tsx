import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

// Advantages of fetching data with React Query
// 1 - Auto Retries
// 2 - Auto Refresh
// 3 - Caching

interface Todo {
	id: number;
	title: string;
	userId: number;
	completed: boolean;
}

const TodoList = () => {
	const fetchTodos = () =>
		axios
			.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.data);

	const { data: todos } = useQuery({
		queryKey: ["todos"],
		queryFn: fetchTodos,
	});

	// if (error) return <p>{error}</p>;

	return (
		<ul className="list-group">
			{todos?.map((todo) => (
				<li key={todo.id} className="list-group-item">
					{todo.title}
				</li>
			))}
		</ul>
	);
};

export default TodoList;
