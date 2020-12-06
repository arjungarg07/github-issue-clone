import React from 'react';
import Button from 'react-bootstrap/Button';

const IssueHeader = ({ openNewIssueModal, filters: { isOpen, isClosed }, setFilter}) => (
	<div className="bg-gray-100 border border-b-0 container flex items-center justify-between mt-2 mx-auto px-4 py-2">
		<div className="flex w-1/4">
			<div className="mr-2">
				<input onChange={setFilter} checked={isOpen} className="mr-1" type="checkbox" id="isOpen" name="isOpen" value="isOpen" />
				<label htmlFor="isOpen">Open</label>
			</div>
			<div className="mr-2">
				<input onChange={setFilter} checked={isClosed} className= "mr-1" type="checkbox" id="isClose" name="isClosed" value="isClosed" />
				<label htmlFor="isClosed">Closed</label>
			</div>
		</div>
		<div>
			<Button variant="primary" onClick={openNewIssueModal}>New Issue</Button>
		</div>
	</div>
);

export default IssueHeader;
