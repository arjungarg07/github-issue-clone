import React from 'react';

import Issue from './issue';

const IssuesList = ({list}) => <div className="bg-gray-100 container mx-auto my-14 border-b">
	{list.map(details => <Issue details={details} />)}
</div>

export default IssuesList;
