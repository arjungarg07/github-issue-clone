import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import IssuesList from './issuesList';
import {
	getAllIssues,
	createIssue,
	editIssue,
	deleteIssue,
} from '../apiCalls/prodApis';
import EditModal from './editModal';

import loaderSvg from '../images/loader.svg';
import IssueHeader from './issueHeader';
import Pagination from './pagination';
import Header from './header';
export default class IssueTable extends Component {
	state = {
		currentPage: 1,
		list: [],
		loading: false,
		filters: { isOpen: true, isClosed: true },
		selected: undefined,
		isNew: false,
		showModal: false,
		totalPages: 1,
	};

	async componentDidMount() {
		this.setState({
			loading: true,
		});
		const { currentPage: page } = this.state;
		const {
			success,
			data: { list = [], totalPages = 1 } = {},
		} = await getAllIssues({
			page,
		});
		this.setState({
			list,
			loading: false,
			totalPages,
		});
	}

	openNewIssueModal = () => {
		this.setState({
			isNew: true,
			active: undefined,
			showModal: true,
		});
	};

	closeModal = () => {
		this.setState({
			isNew: false,
			showModal: false,
		});
	};

	selectIssue = (issue) => {
		this.setState({
			selected: issue,
			showModal: true,
			isNew: false,
		});
	};

	setFilter = async ({ target: { name, checked } }) => {
		const { filters: oldFilters, currentPage: page } = this.state;
		const newFilters = {
			...oldFilters,
			[name]: checked,
		};
		this.setState({
			filters: {
				...newFilters,
			},
			loading: true,
		});
		const {
			data: { list, totalPages } = {},
			message: response_msg,
		} = await getAllIssues({
			page: 1,
			...newFilters,
		});
		if (!list) {
			this.setState({
				loading: false,
			});
			return alert(response_msg);
		}
		this.setState({
			loading: false,
			list,
			totalPages,
		});
	};

	deleteIssue = async (id) => {
		this.setState({
			loading: true,
		});
		const { success, message } = await deleteIssue(id);
		if (!success) {
			this.setState({
				loading: false,
			});
			return alert(message);
		}
		const {
			data: { list, totalPages } = {},
			message: response_msg,
		} = await getAllIssues({
			page: 1,
		});
		if (!list) {
			this.setState({
				loading: false,
			});
			return alert(response_msg);
		}
		this.setState({
			loading: false,
			currentPage: 1,
			list,
			totalPages,
		});
	};

	handleSubmit = async (data) => {
		const { id } = data;
		const { currentPage } = this.state;
		const page = id ? currentPage : 1;
		this.setState({
			loading: true,
			isNew: false,
			showModal: false,
		});
		const { success, message } = id
			? await editIssue(id, data)
			: await createIssue(data);
		if (!success) {
			this.setState({
				loading: false,
			});
			return alert(message);
		}
		const {
			data: { list, totalPages } = {},
			message: response_msg,
		} = await getAllIssues({
			page,
		});
		if (!list) {
			this.setState({
				loading: false,
			});
			return alert(response_msg);
		}
		this.setState({
			loading: false,
			currentPage: page,
			list,
			totalPages,
		});
	};

	handlePageClick = async ({ selected: page }) => {
		this.setState({
			loading: true,
		});
		const {
			data: { list, totalPages } = {},
			message: response_msg,
		} = await getAllIssues({
			page: page + 1,
		});
		if (!list) {
			this.setState({
				loading: false,
			});
			return alert(response_msg);
		}
		this.setState({
			loading: false,
			currentPage: page + 1,
			list,
			totalPages,
		});
	};

	render() {
		const {
			list,
			showModal,
			isNew,
			selected,
			loading,
			filters,
			totalPages,
			currentPage,
		} = this.state;
		return (
			<div className="container">
				<Header/>
				{showModal && (
					<EditModal
						isNew={isNew}
						active={selected}
						closeModal={this.closeModal}
						handleSubmit={this.handleSubmit}
					/>
				)}
				<IssueHeader
					openNewIssueModal={this.openNewIssueModal}
					filters={filters}
					setFilter={this.setFilter}
				/>
				{loading ? (
					<div className="py-72 bg-gray-100">
						<img
							alt="loading....."
							className="mx-auto"
							width="48"
							src={loaderSvg}
						/>
					</div>
				) : (
					<>
						<IssuesList
							list={list}
							selectIssue={this.selectIssue}
							closeIssue={this.handleSubmit}
							deleteIssue={this.deleteIssue}
						/>
					</>
				)}
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					handlePageClick={this.handlePageClick}
				/>
			</div>
		);
	}
}
