import "dotenv/config";
import app from "./server";

const PORT = process.env.NODE_VAL === "REAL" ? process.env.PORT : 4000;
const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening);
