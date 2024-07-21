import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOption = {
    origin: 'http://localhost:5173/',
    credentials: true
}
app.use(cors(corsOption));

const PORT = 3000;

app.listen(()=>{
    console.log(`server running on port ${PORT}`);
})