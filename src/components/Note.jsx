import { useContext } from "react";
import { GoEye, GoPencil, GoTrash } from "react-icons/go";
import { NoteContext } from "../store/NoteContext";
import PropTypes from "prop-types";

const Note = ({ note }) => {
  const { viewNoteHandler } = useContext(NoteContext);
  const { title, content } = note;
  return (
    <div className='bg-slate-100 h-fit p-2 shadow-md rounded-md border-2 border-slate-400 cursor-pointer'>
      <h1 className='font-bold text-lg mb-1'>{title}</h1>
      <p className='text-base text-neutral-600 mb-1 text-justify break-all hyphens-auto'>
        {content.length > 100 ? content.substring(0, 100) + "..." : content}
      </p>
      <div className='flex items-center justify-end gap-1'>
        <button className='bg-rose-700 text-white text-sm px-2 py-1 rounded-sm shadow-md flex items-center gap-1'>
          <GoTrash /> Delete
        </button>
        <button className='bg-yellow-600 text-white text-sm px-2 py-1 rounded-sm shadow-md flex items-center gap-1'>
          <GoPencil /> Edit
        </button>
        <button
          onClick={viewNoteHandler}
          className='bg-blue-500 text-white text-sm px-2 py-1 rounded-sm shadow-md flex items-center gap-1'>
          <GoEye />
          View
        </button>
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object,
};

export default Note;
