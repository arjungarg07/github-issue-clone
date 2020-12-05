const {commonQuery} = require('./db');

async function create(req,res){
	try{
		const { title , description } = req.body;
		if(!title && !description){
			res.status(422).json({
				message: "Title and description both are required",
				success: false
			});
		}
		const INSERT_QUERY = `INSERT INTO Issues SET ?`;
		await commonQuery(INSERT_QUERY, {
			title,
			description,
			createdAt: new Date(),
			lastModified: new Date()
		});

		res.json({
			message: 'Successfully created an issue',
			success: true
		})
	}catch(err){
		console.log(err);
		res.json({
			message: 'Internal Server Error',
			success: false
		});
	};
};

async function update(req,res){
	try{
		const { id: unformatted_id } = req.params;
		const id = Number(unformatted_id); //Validation
		if(Number.isNaN(id) || id < 1)
			return res.status(422).json({ 
				success: false,
				message: 'issue id is invalid' 
			});
		const { description , isOpen } = req.body;
		const { affectedRows } = await commonQuery(`UPDATE Issues SET ? WHERE id = ${id} AND isOpen = true AND active = 1`, {
			...description && { description },
			...isOpen && { isOpen },
			updatedAt = new Date()
		});
		if(affectedRows === 0)
			return res.status(422).json({ success: false, message: 'Issue is closed or id is invalid' });

		res.json({
			message: "Successfully update an issue",
			success: true
		});
	}catch(err){
		console.log(err);
		res.json({
			message: 'Internal server error',
			success: false
		});
	};
};

async function getAll(req,res){
	try{
		const { page: unformatted_page } = req.query;
		const page = Number(unformatted_page);
		if(Number.isNaN(page) || page < 0)
			return res.status(422).json({ 
				success: false,
				message: 'Page number is invalid' 
			});
		const begin = page === 1 ? 0 : page*10;

		const GET_ALL_QUERY = `SELECT * FROM Issues LIMIT 10 OFFSET ${begin} WHERE isOpen = true AND active = 1`;
		const data = await commonQuery(GET_ALL_QUERY);

		res.json({
			data: data,
			message: 'Successfully fetched issues',
			success: true
		});
	}catch(err){
		console.log(err);
		res.status(400).json({
			message: 'Internal server error',
			success: false
		});
	}
};

async function deleteOne(req,res){
	try{
		const { id: unformatted_id } = req.params;
		const id = Number(unformatted_id);
		if(Number.isNaN(id) || id < 1)
			return res.status(422).json({ 
				success: false,
				message: 'issue id is invalid' 
			});

		const DELETE_QUERY = `UPDATE Issues SET active = 0 WHERE id = ${id}`;
		await commonQuery(DELETE_QUERY);
		res.json({
			message: 'Successfully deleted an issue',
			success: true
		});
	}catch(err){
		console.log(err);
		res.json({
			message: 'Internal server error',
			success: false
		});
	}
};

async function getOne(req,res){
	try{
		const { id: unformatted_id } = req.query;
		const id = Number(unformatted_id);
		if(Number.isNaN(id) || id < 1)
			return res.status(422).json({ 
				success: false,
				message: 'issue id is invalid' 
			});

		const FETCH_QUERY = `SELECT * FROM Issues WHERE id = ${id} AND active = 1;`
		const data = await commonQuery(FETCH_QUERY);

		res.json({
			data: data,
			message: 'Successfully fetched an issue',
			success: true
		});
	}catch(err){
		console.log(err);
		res.json({
			message: 'Internal server error',
			success: false
		});
	}
};

const exports = {
	create,
	update,
	getAll,
	deleteOne,
	getOne
} 