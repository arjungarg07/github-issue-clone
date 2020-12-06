import { customFetch } from '../custom-lib';

export const getAllIssues = (params) =>
	customFetch(
		'http://localhost:8000/list-issues?' +
			new URLSearchParams(params).toString(),
		{}
	);

export const createIssue = (params) =>
	customFetch('http://localhost:8000/add-issue', {
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		method: 'POST',
		body: JSON.stringify(params),
	});

export const editIssue = (id, params) =>
	customFetch(`http://localhost:8000/update-issue/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		method: 'PATCH',
		body: JSON.stringify(params),
	});


export const deleteIssue = id =>
	customFetch(`http://localhost:8000/delete-issue/${id}`, {
		mode: 'cors',
		method: 'DELETE',
	});

// export * from './dummyApis';
