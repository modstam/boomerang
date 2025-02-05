import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = 3000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, ".");
app.use(express.static(distPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.get("/api/health", (raeq, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
