"use client";
import React from 'react'
import { getTodos } from './actions'
import { useEffect } from 'react';
import { deleteTodo } from './actions';

type Todo = {
    id: number,
    title: string
}

const TodoList = ( { todos, setTodos }: {todos: Todo[]|null, setTodos: (todos: Todo[] | null) => void}) => {
    useEffect(() => {
        const fetchTodos = async() => {
            const data= await getTodos();
            //上の状態でawaitがないとgetTodos()はPromise<Todo[]>(pending)を戻すのでそれをawaitすることで使えるようになる。
            setTodos(data);
        };
        fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleDelete = async(id: number) => {
        await deleteTodo(id);
        const data= await getTodos();
        setTodos(data);
    }

    return (
        <ul>
            {todos ? (
                todos.map((todo) => (
                <div key={todo.id} className="flex">
                    <li >・{todo.title}</li>
                    <h1 className = "cursor-pointer" onClick={() => handleDelete(todo.id)}>❌</h1>
                </div>
                ))
            ) : (
                <p>データなし</p>
            )}
        </ul>
    );
};

export default TodoList
