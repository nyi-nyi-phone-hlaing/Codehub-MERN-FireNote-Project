import { useContext, useState } from "react";
import { GoEye, GoTrash } from "react-icons/go";
import { NoteContext } from "../store/NoteContext";
import PropTypes from "prop-types";

const Note = ({ note, getNotes }) => {
  const { setView, setDetail } = useContext(NoteContext);
  const { title, content } = note;
  const [getting, setGetting] = useState(false);
  const [loading, setLoading] = useState(false);

  const getNoteDetails = async () => {
    setLoading(true);
    setGetting(true);
    try {
      const response = await fetch(
        `https://firenote-mern-project-default-rtdb.firebaseio.com/notes/${note.key}.json`
      );
      const noteValue = await response.json();
      setView(true);
      setDetail(noteValue);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setGetting(false);
  };

  const deleteNote = async () => {
    setLoading(true);
    try {
      await fetch(
        `https://firenote-mern-project-default-rtdb.firebaseio.com/notes/${note.key}.json`,
        {
          method: "DELETE",
        }
      );
      setLoading(false);
      getNotes();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className='bg-slate-100 h-fit p-2 shadow-md rounded-md border-2 border-slate-400 cursor-pointer'>
      {loading && (
        <>{getting ? <p>Getting note details...</p> : <p>Deleting...</p>}</>
      )}
      {!loading && (
        <>
          <h1 className='font-bold text-lg mb-1'>{title}</h1>
          <p className='text-base text-neutral-600 mb-1 text-justify break-all hyphens-auto'>
            {content.length > 100 ? content.substring(0, 100) + "..." : content}
          </p>
          <div className='flex items-center justify-end gap-1'>
            <button
              onClick={deleteNote}
              className='bg-rose-700 text-white text-sm px-2 py-1 rounded-sm shadow-md flex items-center gap-1'>
              <GoTrash /> Delete
            </button>
            <button
              onClick={getNoteDetails}
              className='bg-blue-500 text-white text-sm px-2 py-1 rounded-sm shadow-md flex items-center gap-1'>
              <GoEye />
              View
            </button>
          </div>
        </>
      )}
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object,
  getNotes: PropTypes.func,
};

export default Note;
