import app from "./app";
import { config } from "./configs";

const PORT = config.PORT;

app.listen(PORT, async () => {
  console.log(`  Server is listening on http://localhost:${PORT}`);
});
