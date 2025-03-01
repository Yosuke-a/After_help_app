"use client";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Todo = {
    id: number;
    title: string;
};

export default function TodoPage() {
    const router = useRouter();
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState<Todo[] | null>(null);

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Todo App</h1>

                <div className="w-full">
                    <Form newTodo={newTodo} setNewTodo={setNewTodo} setTodos={setTodos} />
                </div>
            </div>

            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4 mt-4">
                <TodoList todos={todos} setTodos={setTodos} />
            </div>

            <button
                onClick={() => router.push("/")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-200 mt-6"
            >
                アフター計算Appへ
            </button>
        </section>
    );
}
