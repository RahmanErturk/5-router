import express from "express";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

import albumRouter from "./router/albumRouter.js";
import photoRouter from "./router/photoRouter.js";

// import data from "./db/data.json" assert { "type": "json" };

// const db = new Low(new JSONFile("db/data.json"));

const server = express();
const port = 3000;

server.use(express.json());

// await db.read();
// console.log(db.data.photos);

server.use("/albums", albumRouter);
server.use("/photos", photoRouter);

server.listen(port, () => {
  console.log("listening on port " + port);
});
