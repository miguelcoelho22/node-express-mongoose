import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:2388@livraria-db.ati3muh.mongodb.net/");

let db = mongoose.connection;

export default db;