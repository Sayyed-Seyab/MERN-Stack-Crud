import express from 'express'
import dbCon from './utlies/db.js';
import dotenv from 'dotenv';
import routers from './Routes/routes.js';
import cors from 'cors';

dotenv.config();
const app = express();
dbCon()


app.use(express.json());
app.use(cors())
app.use('/api',routers);


app.listen(process.env.PORT, ()=>{
    console.log('server is running')
})