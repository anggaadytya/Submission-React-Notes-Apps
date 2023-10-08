import React from "react";

class FormEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
      titleLimit: {
        inputTitle: "",
        limit: 50,
        char: 50,
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSave = () => {
    const { title, body } = this.state;
    this.props.handleEdit(this.props.note.id, { title, body });
    this.props.handleClose();
  };

  render() {
    const { handleClose } = this.props;
    return (
      <div className="modal">
        <form onSubmit={this.handleSave} className="formInput">
          <h2>
            Edit a Note
            <span className="close" onClick={handleClose}>
              &times;
            </span>
          </h2>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
            placeholder="Title"
            className="titleInput"
          />
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.handleInputChange}
            placeholder="Body"
            className="bodyInput"
          />
          <button type="submit" className="buttonInput">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default FormEdit;
