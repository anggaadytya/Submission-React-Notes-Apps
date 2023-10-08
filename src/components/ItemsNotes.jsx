import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

const ItemsNotes = ({ notes, deleteNote, archiveNote, editNote }) => {
  return (
    <div className='item'>
      <div className='content'>
        <h3>{notes.title}</h3>
        <p>{showFormattedDate(notes.createdAt)}</p>
        <p>{notes.body}</p>
      </div>
      <div className='actions'>
        <button onClick={() => deleteNote(notes.id)}>Delete</button>
        <button onClick={() => editNote(notes.id)}>Edit</button>
        <button onClick={() => archiveNote(notes.id)}>{!notes.archived? 'Archive' : 'Unarchive'}</button>
      </div>
    </div>
  );
};

export default ItemsNotes;