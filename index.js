import express from 'express';
import { router as SongRouter } from './Routes/song.router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(SongRouter);

app.listen(port, () => {
	console.log(`Server kører på port http://localhost:${port}`);
})