"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const Todo_1 = require("../models/Todo");
const Todos = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new Todo_1.Todo(Math.random().toString(), text);
    Todos.push(newTodo);
    return res.status(201).json({ message: `Todo was successfully created`, todo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    return res.status(200).json({ todos: Todos });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const index = Todos.findIndex(todo => todo.id === todoId);
    if (index < 0) {
        throw new Error(`Coudl not find the todo in the list`);
    }
    Todos[index] = new Todo_1.Todo(Todos[index].id, updatedText);
    return res.status(200).json({ message: `Todo successfully updated ` });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const index = Todos.findIndex(todo => todo.id === todoId);
    if (index < 0) {
        throw new Error(`Coudl not find the todo in the list`);
    }
    Todos.splice(index, 1);
    return res.status(200).json({ message: `Todo was successfully deleted` });
};
exports.deleteTodo = deleteTodo;
/* export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    Con sintáxis de tipado por parámetros
} */ 
