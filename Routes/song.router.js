import express from 'express';
import SongController from '../Controllers/song.controller.js';

const controller = new SongController();
const router = express.Router();

router.get('/', (req, res) => { controller.list(req, res) })
router.get('/:id([0-9]*)', (req, res) => { controller.get(req, res) })

export { router }