import PropTypes from "prop-types";
import Note from "./Note";

const NoteContainer = ({ notes, loading }) => {
  return (
    <section className='w-full max-h-[calc(100%-3.5rem)]  p-2 gap-2 overflow-y-scroll grid grid-cols-2 '>
      {loading && <p>Loading...</p>}
      {notes.length > 0
        ? notes.map((note) => {
            return <Note key={note.key} note={note} />;
          })
        : !loading && <p>Hello World</p>}
    </section>
  );
};

NoteContainer.propTypes = {
  notes: PropTypes.array,
  loading: PropTypes.bool,
};

export default NoteContainer;
