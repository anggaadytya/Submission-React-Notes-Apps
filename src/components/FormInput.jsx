import React from "react";
import PropTypes from "prop-types";

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {
        title: "",
        body: "",
      },
      titleLimit: {
        inputTitle: "",
        limit: 50,
        char: 50,
      },
    };

    this.onTitlehandleChange = this.onTitlehandleChange.bind(this);
    this.onBodyhandleChange = this.onBodyhandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitlehandleChange(event) {
    if (event.target.value.length <= 50) {
      this.setState((prevState) => {
        return {
          titleLimit: {
            ...prevState.titleLimit,
            inputTitle: event.target.value,
            char: prevState.titleLimit.limit - event.target.value.length,
          },
          note: {
            ...prevState.note,
            title: event.target.value,
          },
        };
      });
    }
  }

  onBodyhandleChange(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        note: {
          ...prevState.note,
          body: event.target.value,
        },
      };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addNotes(this.state.note);
    this.props.handleSave(this.state.note);
    this.setState((prevState) => {
      return {
        note: {
          title: "",
          body: "",
        },
        titleLimit: {
          ...prevState.titleLimit,
          inputTitle: "",
          char: 50,
        },
      };
    });
  }

  render() {
    const { handleCloseModal } = this.props;
    return (
      <div className="modal">
        <form className="formInput" onSubmit={this.onSubmit}>
          <h2>
            Add a note{" "}
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
          </h2>
          <p
            className={`noteInput ${
              this.state.titleLimit.char === 0 ? "zero" : ""
            }`}
          >
            Sisa karakter: {this.state.titleLimit.char}
          </p>

          <input
            type="text"
            name="title"
            placeholder="title"
            className="titleInput"
            onChange={this.onTitlehandleChange}
            value={this.state.note.title}
          />
          <textarea
            type="text"
            name="body"
            placeholder="body"
            className="bodyInput"
            onChange={this.onBodyhandleChange}
            value={this.state.note.body}
          />
          <button className="buttonInput">Add</button>
        </form>
      </div>
    );
  }
}

FormInput.propTypes = {
  addNotes: PropTypes.func.isRequired,
};

export default FormInput;
