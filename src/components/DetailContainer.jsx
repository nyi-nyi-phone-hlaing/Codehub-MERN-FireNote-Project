import { GoX } from "react-icons/go";
import { NoteContext } from "../store/NoteContext";
import { useContext } from "react";

const DetailContainer = () => {
  const { view, hideNoteHandler, detail } = useContext(NoteContext);
  return (
    <section
      className={`absolute w-full h-full bg-neutral-100 top-0 left-0 duration-300 ${
        view
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      <header className='w-full h-12 bg-blue-500 flex items-center justify-between px-3 '>
        <h1 className='text-white font-medium'>Note Details</h1>
        <button
          onClick={hideNoteHandler}
          className='bg-white size-7  flex items-center justify-center text-base rounded-sm shadow-md '>
          <GoX />
        </button>
      </header>
      <section className='w-full h-[calc(100%-3rem)] overflow-y-scroll p-2'>
        <h1 className='font-bold text-lg mb-1'>{detail.title}</h1>
        <p className='text-base text-neutral-600 mb-1 text-justify'>
          {detail.content}
        </p>
      </section>
    </section>
  );
};

export default DetailContainer;
