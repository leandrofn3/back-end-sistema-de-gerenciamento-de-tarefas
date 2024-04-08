import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import routerUser from "./routes/user.routes"
import routerTask from "./routes/task.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(routerUser);
app.use(routerTask);

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({
        ok: true,
        message: "Bem Vindo a API de Gerenciamento de tarefas!"
    });
})

app.listen(port, () => {
    console.log(`APP está rodando na porta ${port}`)
});