require('dotenv').config();
const express = require('express');
const app = express();
const anggotaRouter = require("./api/router/r.anggota");
const bukuRouter = require("./api/router/r.buku");
const petugasRouter = require("./api/router/r.petugas");
const pinjamRouter = require("./api/router/r.pinjam");
app.use(express.json());
app.use("/api/anggota", anggotaRouter);
app.use("/api/petugas", petugasRouter);
app.use("/api/pinjam", pinjamRouter)
app.use("/api/pinjam", bukuRouter)

app.listen(process.env.APP_PORT, ()=>{
    console.log("connected on PORT : " + process.env.APP_PORT)
})