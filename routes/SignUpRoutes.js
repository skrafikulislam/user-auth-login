import express from "express";
import send_signupDetails from "../controllers/SignUpController.js";

const router = express.Router();

router.get("/login", send_signupDetails);

export default router;
