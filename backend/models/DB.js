const mongoose =require("mongoose");
const { Schema } = mongoose;

const DbSchema = new mongoose.Schema({
    id : Number,
    name : String,
    password :{type :String, required :true}
,
});

const Db = mongoose.model("Db",DbSchema);
module.exports = Db;
