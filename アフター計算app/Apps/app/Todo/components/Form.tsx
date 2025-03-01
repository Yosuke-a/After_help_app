import { addTodo } from './actions'
import React from 'react'
import { getTodos } from './actions'
type Todo = {
    id: number,
    title: string
}

const Form = ({ newTodo, setNewTodo, setTodos} : {newTodo: string, setNewTodo: (e: string) => void; setTodos: (todos: Todo[] | null) => void}) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(newTodo === "") return ;
        await addTodo(newTodo);
        setNewTodo("");
        const data = await getTodos()
        setTodos(data);
    }
  return (
    <div>
      <form className="flex items-center gap-2 w-full" onSubmit={(e) => handleSubmit(e)}>
        <input type='text' className="w-full max-w-xs py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" value={newTodo} placeholder='新しいTodoを入力' onChange={(e) => setNewTodo(e.target.value)}></input>
        <button type='submit' className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200" >追加</button>
      </form>
    </div>
  )
}

export default Form
