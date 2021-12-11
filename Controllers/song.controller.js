import { response } from "express";

class SongController {
	constructor() {
		console.log('Der er blevet kaldt en instans af klassen SongController');
	}

	list = (req, res) => {
		res.send('Metoden list er blevet kaldt på klassen SongController');
	}

	get = (req, res) => {
		console.log(req.params.id);
		res.send('Metoden get er blevet kaldt på klassen SongController');
	}
}

export default SongController;