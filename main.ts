import { App } from "./deps.ts";
import { api } from "./api.ts";

const env = Deno.env.toObject();
const app = new App();
const PORT = parseInt(env.PORT) || 3000;

app.use("/api", api);

app.listen({ port: PORT });
console.log(`Server running on http://localhost:${PORT}`);
