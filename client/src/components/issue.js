/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from 'react-bootstrap/Button';

// import { format } from 'date-fns';
import ReactTimeAgo from 'react-time-ago'

import issueOpenSvg from '../images/issueOpen.svg';
import issueClosedSvg from '../images/issueClosed.svg';

const Issue = ({
	details: { isOpen, title, createdAt, id, description },
	selectIssue, closeIssue, deleteIssue,
}) => (
	<div
		
		className="justify-between items-center cursor-pointer border border-b-0 border-collapse border-gray-300 flex px-6 py-2 hover:bg-gray-200"
	>
		<div className="flex" onClick={() => {
			selectIssue({ id, title, description });
		}}>
			<div className="pt-1">
				<img
					width="20"
					src={isOpen ? issueOpenSvg : issueClosedSvg}
				></img>
			</div>
			<div className="ml-3">
				<div className="font-medium text-left">{title}</div>
				<div className="text-gray-700 text-sm">
					#{id} opened <ReactTimeAgo date={createdAt} locale="en-US"/>
				</div>
			</div>
		</div>
		<div>
			{isOpen ? <Button variant="outline-dark" size="sm" className="mr-2" onClick={()=>{
				closeIssue({ id, isOpen: 0});
			}}>
				Close
			</Button>:<></>}
			<Button variant="outline-danger" size="sm" onClick={()=>{
				deleteIssue(id);
			}}>
				Delete
			</Button>
		</div>
	</div>
);

export default Issue;
