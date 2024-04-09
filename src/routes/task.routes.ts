import { Router } from "express"
import { TaskController } from "../controllers/task.controller";

const router = Router();
const controller = new TaskController();

router.get("/task", controller.index);
router.post("/task/create", controller.create);
router.put("/task/update/:id",controller.update);
router.delete("/task/delete/:id",  controller.delete);

export default router;