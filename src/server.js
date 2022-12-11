import { startDatabase } from "./database";
import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  startDatabase();
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app
