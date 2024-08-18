import express from 'express'
import dbCon from './utlies/db.js';
import dotenv from 'dotenv';
import routers from './Routes/routes.js';
import cors from 'cors';
const port = process.env.PORT || 4000;
dotenv.config();
const app = express();
dbCon()


app.use(express.json());
app.use(cors())
app.use('/api',routers);


app.listen(port, ()=>{
    console.log('server is running')
})
