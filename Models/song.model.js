import db from '../Config/db.config.js';

class SongModel {
	// Class constructor
	constructor() { }

	/* Song Model Methods Begin */

	list = (req, res) => {
		return new Promise((resolve, reject) => {
			const orderBy = req.query.orderBy || 's.id'
			const dir = req.query.dir || 'ASC'
			const limit = req.query.limit ? ` LIMIT ${req.query.limit}` : '';
			const sql = `SELECT s.id, s.title, a.name AS artist 
							FROM song s  
							JOIN artist a 
							ON s.artist_id = a.id 
							ORDER BY ${orderBy} ${dir} 
							${limit}`
			db.query(sql, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			})

		})
	}

	get = (req, res) => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT s.id, s.title, s.content, s.artist_id, 
							a.name AS artist, s.created  
							FROM song s  
							JOIN artist a 
							ON s.artist_id = a.id 
							WHERE s.id = ?`
			db.query(sql, [req.params.id], (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(...result);
				}
			})

		})
	}
	
	create = (req, res) => {
		return new Promise((resolve, reject) => {
			const arrValues = Object.values(req.body)
			const sql = `INSERT INTO song(title, content, artist_id) 
							VALUES(?,?,?)`
			db.query(sql, arrValues, (err, result) => {
				if(err) {
					reject(err)
				} else {
					resolve({ status: true, id: result.insertId })
				}
			})
		})		
	}

	update = (req, res) => {
		return new Promise((resolve, reject) => {
			const arrValues = Object.values(req.body)
			const sql = `UPDATE song 
							SET title = ?,
							content = ?,
							artist_id = ? 
							WHERE id = ?`
			db.query(sql, arrValues, (err, result) => {
				if(err) {
					reject(err)
				} else {
					resolve({ status: true, id: req.body.id })
				}
			})
		})		
	}

	delete = (req, res) => {
		return new Promise((resolve, reject) => {
			const sql = `DELETE FROM song 
							WHERE id = ?`
			db.query(sql, [req.params.id], (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({ status: true });
				}
			})

		})
	}	

	/* Song Model Methods End */
}

export default SongModel;