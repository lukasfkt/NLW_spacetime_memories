import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { memoriesRoutes } from "./routes/memories";
import multipart from "@fastify/multipart";
import { authRoutes } from "./routes/auth";
import { uploadRoutes } from "./routes/upload";

const app = fastify();

app.register(multipart);

app.register(cors, {
  origin: true, // Todas as URLS de front-end poderão acessar nosso back-end
});

app.register(jwt, {
  secret: "spacetime",
});

app.register(authRoutes);
app.register(memoriesRoutes);
app.register(uploadRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("🚀 HTTP server running on http://localhost:3333");
  });
