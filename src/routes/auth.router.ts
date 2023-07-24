import { Router } from "express";
import { authController } from "../controllers/";
// import { isAuthenticated } from "../middlewares";

const authRouter: Router = Router();

authRouter.get("/", authController.verifyLogin);
authRouter.get("/logout", authController.logout);

export default authRouter;
