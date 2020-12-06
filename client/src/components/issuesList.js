import React from 'react';

import Issue from './issue';

const IssuesList = ({ list, selectIssue, closeIssue, deleteIssue }) => (
	<div className="bg-gray-100 border-b container mx-auto p-0">
		{list && list.length > 0 ? (
			list.map((details, index) => (
				<Issue
					selectIssue={selectIssue}
					details={details}
					key={index}
					closeIssue={closeIssue}
					deleteIssue={deleteIssue}
				/>
			))
		) : (
			<div className="border border-b-0 border-collapse border-gray-300 cursor-pointer flex font-semibold hover:bg-gray-200 items-center justify-center px-6 py-2 text-xl">No Issues to display</div>
		)}
	</div>
);

export default IssuesList;
