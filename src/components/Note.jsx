import { useContext } from "react";
import { GoEye, GoPencil, GoTrash } from "react-icons/go";
import { NoteContext } from "../store/NoteContext";

const Note = () => {
  const { viewNoteHandler } = useContext(NoteContext);
  return (
    <div className='bg-slate-100 h-fit p-2 shadow-md rounded-md border-2 border-slate-400 cursor-pointer'>
      <h1 className='font-bold text-lg mb-1'>Lorem ipsum dolor sit amet.</h1>
      <p className='text-base text-neutral-600 mb-1 text-justify'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit...
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

export default Note;
