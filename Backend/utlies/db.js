
import mongoose from 'mongoose';


const dbCon = async()=>{
    mongoose.connect(process.env.Db_URL, { useNewUrlParser: true }).then(
        () => { console.log('Database is connected') },
        err => { console.log('There is problem while connecting database ' + err) }
        );
}
export default dbCon;