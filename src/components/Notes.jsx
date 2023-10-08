/* eslint-disable no-unused-vars */
import React from "react";
import ItemsNotes from "./ItemsNotes";
import FormInput from "./FormInput";
import Loader from "./Loader";
import FormEdit from "./FormEdit";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showLoader: false,
      showEditModal: false,
      selectedNoteId: null,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEditNote = this.handleEditNote.bind(this);
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, showEditModal: false });
  };

  handleSave = (e) => {
    this.setState({ showLoader: true });
    this.handleCloseModal();
    setTimeout(() => {
      this.setState({ showLoader: false });
      alert("Note Added");
    }, 2000);
    e.preventDefault();
    this.props.addNotes(this.state.note);
  };

  handleEditNote = (id) => {
    this.setState({
      showEditModal: true,
      selectedNoteId: id,
    });
  };

  render() {
    const { notes, deleteNote, archiveNote, addNotes, editNote } = this.props;
    const notesActive = !notes.length
      ? []
      : notes.filter((note) => note.isArchived === false);

    return (
      <div className="main">
        <div className="active-title">
          <h2>Active Notes</h2>
          <button className="button-add" onClick={this.handleOpenModal}>
            +
          </button>
        </div>
        {this.state.showModal && (
          <FormInput
            handleCloseModal={this.handleCloseModal}
            addNotes={addNotes}
            handleSave={this.handleSave}
          />
        )}
        {this.state.showEditModal && (
          <FormEdit
            note={notes.find((note) => note.id === this.state.selectedNoteId)}
            handleClose={this.handleCloseModal}
            handleEdit={editNote}
          />
        )}
        {this.state.showLoader && <Loader />}
        {notesActive.length === 0 ? (
          <p>There are no active notes</p>
        ) : (
          <div className="active-notes">
            {notesActive.map((note) => (
              <ItemsNotes
                key={note.id}
                notes={note}
                deleteNote={deleteNote}
                archiveNote={archiveNote}
                editNote={this.handleEditNote}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Notes;
