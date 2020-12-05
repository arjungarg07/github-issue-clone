export const customFetch = (url, options) => 
	fetch(url, options)
	.then(res=>res.json())
	.catch(e=>({ success: false, message: 'something went wrong' }));