/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

// import { format } from 'date-fns';

import issueOpenSvg from '../images/issueOpen.svg';
import issueClosedSvg from '../images/issueOpen.svg';

const Issue = ({ details: { isOpen, title, createdAt, id } }) => <div className = "border border-b-0 border-collapse border-gray-300 flex px-6 py-2 hover:bg-gray-200">
	<div className="pt-1">
		<img width = "20" src={isOpen?issueOpenSvg:issueClosedSvg}></img>
	</div>
	<div className="ml-3">
		<div className="font-medium text-left">{title}</div>
		<div className="text-gray-700 text-sm">#{id} opened 11 days ago</div>
	</div>
</div>

export default Issue;