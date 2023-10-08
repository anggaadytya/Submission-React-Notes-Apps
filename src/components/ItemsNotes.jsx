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
        <button onClick={() => archiveNote(notes.id)}>{!notes.isArchived ? 'Archive' : 'Unarchive'}</button>
      </div>
    </div>
  );
};

ItemsNotes.propTypes = {
  notes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isArchived: PropTypes.bool.isRequired,
  }).isRequired,
  deleteNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
};

export default ItemsNotes;