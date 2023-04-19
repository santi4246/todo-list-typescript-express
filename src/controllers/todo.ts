import { RequestHandler } from "express";
import { Todo } from "../models/Todo";

const Todos: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);
    Todos.push(newTodo);

    return res.status(201).json({message: `Todo was successfully created`, todo: newTodo});
}

export const getTodos: RequestHandler = (req, res, next) => {
    return res.status(200).json({todos: Todos});
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = (req.body as {text: string}).text;
    const index = Todos.findIndex(todo => todo.id === todoId);
    if (index < 0) {
        throw new Error(`Coudl not find the todo in the list`);
    }
    Todos[index] = new Todo(Todos[index].id, updatedText);
    return res.status(200).json({message: `Todo successfully updated `});
}

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id;
    const index = Todos.findIndex(todo => todo.id === todoId);
    if (index < 0) {
        throw new Error(`Coudl not find the todo in the list`);
    }
    Todos.splice(index, 1);
    return res.status(200).json({message: `Todo was successfully deleted`});
}

/* export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    Con sintáxis de tipado por parámetros
} */