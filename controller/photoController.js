import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("db/data.json"));

export const getAllPhotos = (req, res) => {};

export const getPhoto = (req, res) => {};

export const editPhoto = (req, res) => {};

export const deletePhoto = (req, res) => {};

export const savePhoto = (req, res) => {};
