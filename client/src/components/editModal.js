import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class EditModal extends Component {
	constructor(props) {
		super(props);
		const { isNew, active: { id, title, description } = {} } = props;
		if (isNew) {
			this.state = {
				title: '',
				description: '',
				id: undefined,
				isNew,
				isEditable: true,
			};
		} else
			this.state = {
				title,
				id,
				description,
				isNew,
				isEditable: false,
			};
	}

	onHandleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = () => {
		const { title,description, id, isNew } = this.state;
		this.props.handleSubmit({ ...isNew && {title}, description, id });
	};

	render() {
		const { closeModal } = this.props;
		const { id, title, description, isNew, isEditable } = this.state;
		return (
			<>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<Modal show={true} onHide={closeModal} animation={false}>
						<Modal.Header closeButton>
							<Modal.Title>
								{isNew ? 'New Issue' : `Issue ${id}`}
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div>
								<label className="font-bold" htmlFor="title">
									Title :-
								</label>
								<br />
								{isNew?<input
									onChange={this.onHandleChange}
									type="text"
									name="title"
									value={title}
									className="border mb-2 rounded w-full p-1"
									required
								/>:<div>{title}</div>}
								
							</div>
							<div>
								<label
									htmlFor="description"
									className="font-bold"
								>
									Description :-
								</label>
								<br />
								<textarea
									onChange={this.onHandleChange}
									type="text"
									name="description"
									value={description}
									className="border mb-2 rounded w-full p-1"
									required
									readOnly={!isEditable}
								/>
							</div>
						</Modal.Body>
						<Modal.Footer>
							{!isNew && (
								<Button
									variant="secondary"
									onClick={()=>{
										this.setState({
											isEditable: true
										})
									}}
								>
									Edit
								</Button>
							)}
							<Button
								variant="primary"
								onClick={this.handleSubmit}
							>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
				</form>
			</>
		);
	}
}

export default EditModal;
