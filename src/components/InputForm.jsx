import { useState } from "react";
import PropTypes from "prop-types";
import { GoPlus } from "react-icons/go";
import { toast } from "react-toastify";
import toastConfig from "../utils/toastConfig";

const InputForm = ({ closeInputHandler, getNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addNote = async (e) => {
    e.preventDefault();

    if (title.trim() === "" || content.trim() === "")
      return toast.error("Title or Content are invalid", toastConfig);
    try {
      await fetch(
        "https://firenote-mern-project-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify({
            title,
            content,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTitle("");
      setContent("");
      closeInputHandler();
      getNotes();
      toast.success("Note add successfully.", toastConfig);
    } catch (error) {
      toast.error("Something went wrong! Try again.", toastConfig);
    }
  };
  return (
    <form onSubmit={addNote} className='w-full h-[calc(100%-3rem)] p-4'>
      <div className='w-full flex flex-col mb-2 '>
        <label htmlFor='title' className='text-gray-600 text-base mb-1'>
          Title
        </label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='bg-blue-50 py-1 px-2 font-thin text-base outline-none border-2 border-slate-500 rounded-md focus:border-blue-500'
        />
      </div>
      <div className='w-full flex flex-col mb-2 '>
        <label htmlFor='content' className='text-gray-600 text-base mb-1'>
          Content
        </label>
        <textarea
          name='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className='bg-blue-50 py-1 px-2 font-thin text-base outline-none border-2 border-slate-500 resize-none rounded-md focus:border-blue-500'></textarea>
      </div>
      <button
        type='submit'
        className='w-full py-1 bg-blue-500 text-white flex items-center justify-center rounded-md shadow-md'>
        <GoPlus className='text-xl mr-1' />
        Add Note
      </button>
    </form>
  );
};

InputForm.propTypes = {
  closeInputHandler: PropTypes.func,
  getNotes: PropTypes.func,
};

export default InputForm;
