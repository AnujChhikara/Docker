import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.get("/", async (req, res) => {
  const data = await client.user.findMany();

  res.json({
    message: "get endpoint",
    data,
  });
});

app.post("/", async (req, res) => {
  await client.user.create({
    data: {
      username: "Anuj" + Math.random().toString(),
      password: "mainanahibatunga" + Math.random().toString(),
    },
  });
  res.json({
    message: "post endpoint",
  });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
