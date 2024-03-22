import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import signUpRouter from "./routes/SignUpRoutes.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Hello World, Welcome To My Page Rafikul, main work url is- localhost:5000/v1/login to see the work </h1>"
    );
});

app.use("/v1", signUpRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on Port ${process.env.PORT}`);
});
