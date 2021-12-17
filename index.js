import express from 'express';
import { router as SongRouter } from './Routes/song.router.js';
import { router as InitRouter } from './Routes/init.sequelize.router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.urlencoded({
	extended: true
}))

const port = process.env.PORT || 4000;

app.use(InitRouter);
app.use(SongRouter);

app.listen(port, () => {
	console.log(`Server kører på port http://localhost:${port}`);
})