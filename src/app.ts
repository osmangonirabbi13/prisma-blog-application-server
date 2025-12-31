import express from "express";
import { postRouter } from "./modules/post/post.routes";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import cors from 'cors'
const app = express();

app.use(cors({
  origin: process.env.APP_URL,
  credentials : true
}))

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
export default app;
