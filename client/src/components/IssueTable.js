import React, { Component } from 'react';

class IssueTable extends Component {
	state = {
		currentPage: 1,
		list: [],
		loading: false,
		filters: { isOpen: true, isClosed: true },
	}
}