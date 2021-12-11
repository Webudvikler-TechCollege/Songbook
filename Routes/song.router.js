import express from 'express';
import db from '../Config/db.config.js';

const router = express.Router();

router.get('/', (req, res) => {
	const sql = `SELECT id, title	 
					FROM song ORDER BY title`;
	db.query(sql, (error, result) => {
		if(error) {
			console.error(error);
		} else {
			console.log(result);
		}
	})
	res.status(200).send('Velkommen til sangbogen');
})

export { router }