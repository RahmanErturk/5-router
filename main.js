import express from "express";
import cors from "cors";

import albumRouter from "./router/albumRouter.js";
import photoRouter from "./router/photoRouter.js";

// import data from "./db/data.json" assert { "type": "json" };

// const db = new Low(new JSONFile("db/data.json"));

const server = express();
const port = 4000;

server.use(express.json());
server.use(cors({ origin: "*" }));

// await db.read();
// console.log(db.data.photos);

server.use("/albums", albumRouter);
server.use("/photos", photoRouter);

server.use((req, res) => res.status(404).end());

server.listen(port, () => {
  console.log("listening on port " + port);
});
