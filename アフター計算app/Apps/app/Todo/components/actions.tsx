import { createClient } from "../../../utils/supabase";

export const getTodos = async() => {
    const supabase = createClient();
    const todos = await supabase.from("Todo").select("*");
    return todos.data;
};

export const addTodo = async(title: string) => {
    const supabase = createClient();
    await supabase.from("Todo").insert({title: title});
};

export const deleteTodo = async (id: number) => {
    const supabase = createClient();
    await supabase.from("Todo").delete().eq("id", id);
}