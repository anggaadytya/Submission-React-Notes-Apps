/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import ItemsNotes from "./ItemsNotes";

const Notes = ({ notes, deleteNote, archiveNote }) => {
  const notesArchive = !notes.length
    ? []
    : notes.filter((notes) => notes.archived === true);

  return (
    <div className="main">
      <h2>Archive Notes</h2>
      {notesArchive.length === 0 ? (
        <p>There are no archive notes</p>
      ) : (
        <div className="active-notes">
          {notesArchive.map((note, index) => (
            <ItemsNotes
              key={index}
              notes={note}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
            />
          ))}
        </div>
      )}
    </div>
  );
};


export default Notes;
