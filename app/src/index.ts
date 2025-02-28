import "dotenv-safe/config.js";
import { makeApp } from "./makeApp";

const HOST = process.env.HOST ?? "0.0.0.0";
const PORT = Number(process.env.HOST ?? "9000");

const app = makeApp();

await app.listen({
  host: HOST,
  port: PORT,
});

app.log.info({}, `Server listening at http://localhost:${PORT}`);
