import { GoPlus } from "react-icons/go";

const InputForm = () => {
  return (
    <form className='w-full h-[calc(100%-3rem)] p-4'>
      <div className='w-full flex flex-col mb-2 '>
        <label htmlFor='title' className='text-gray-600 text-base mb-1'>
          Title
        </label>
        <input
          type='text'
          name='title'
          className='bg-blue-50 py-1 px-2 font-thin text-base outline-none border-2 border-slate-500 rounded-md focus:border-blue-500'
        />
      </div>
      <div className='w-full flex flex-col mb-2 '>
        <label htmlFor='content' className='text-gray-600 text-base mb-1'>
          Content
        </label>
        <textarea
          name='content'
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

export default InputForm;
