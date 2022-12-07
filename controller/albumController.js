import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("db/data.json"));

// await db.read();

export const getAllAlbums = async (req, res) => {
  await db.read();
  res.json(db.data.albums);
};

export const getAlbum = async (req, res) => {
  await db.read();
  const album = db.data.albums.find((a) => a.id === +req.params.id);
  res.json(album);
};

export const editAlbum = async (req, res) => {
  await db.read();

  const index = db.data.albums.findIndex((a) => a.id === +req.params.id);

  db.data.albums[index] = { ...db.data.albums[index], ...req.body };
  await db.write();
  res.json("updated");
};

export const deleteAlbum = async (req, res) => {
  await db.read();

  const index = db.data.albums.findIndex((a) => a.id === +req.params.id);

  db.data.albums.splice(index, 1);

  db.write();

  res.send(`${req.params.id} deleted`);
};

export const saveAlbum = async (req, res) => {
  await db.read();

  const nextID = Math.max(...db.data.albums.map((a) => a.id)) + 1;

  db.data.albums.push({ ...req.body, id: nextID });

  db.write();

  res.send(`Album ${nextID} created successfully`);
};
