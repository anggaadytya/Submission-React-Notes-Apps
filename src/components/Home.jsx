import React from "react";
import { getInitialData } from "../utils";
import Archive from "./Archive";
import Header from "./Header";
import Notes from "./Notes";
import "../styles/Style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: getInitialData(),
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.addNoteHandlerToActive = this.addNoteHandlerToActive.bind(this);
    this.editNoteHandler = this.editNoteHandler.bind(this);
  }

  handleSearch(searchValue) {
    this.setState((prevState) => {
      return {
        search: prevState.notes.filter((note) =>
          note.title.toLowerCase().includes(searchValue.toLowerCase())
        ),
      };
    });
  }

  deleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const search = this.state.search.filter((note) => note.id !== id);
    this.setState({
      notes: notes,
      search: search,
    });
  }

  archiveNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
        search: prevState.search.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }

  addNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: Date.now(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
        search: [
          ...prevState.search,
          {
            id: Date.now(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  addNoteHandlerToActive({ title, body }) {
    this.addNoteHandler({ title, body });
  }

  editNoteHandler(id, { title, body }) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, title, body } : note
        ),
        search: prevState.search.map((note) =>
          note.id === id ? { ...note, title, body } : note
        ),
      };
    })
  }

  render() {
    return (
      <div className="container">
        <Header handleSearch={this.handleSearch} />
        <Notes
          addNotes={this.addNoteHandlerToActive}
          notes={this.state.search}
          deleteNote={this.deleteNoteHandler}
          archiveNote={this.archiveNoteHandler}
          editNote={this.editNoteHandler}
        />
        <Archive
          notes={this.state.search}
          deleteNote={this.deleteNoteHandler}
          archiveNote={this.archiveNoteHandler}
          editNote={this.editNoteHandler}
        />
      </div>
    );
  }
}

export default Home;
