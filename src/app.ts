import { json } from "body-parser";
import express, { Request, Response, NextFunction } from "express";
import router from "./routes/todos";

const app = express();

app.use(json());
app.use("/todos", router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(3001, () => {
    console.log("Server listen on port 3001");
});