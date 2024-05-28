import InputForm from "./InputForm";
import { GoX } from "react-icons/go";
import PropTypes from "prop-types";

const InputContainer = ({ closeInputHandler, isOpen }) => {
  return (
    <section
      className={`absolute w-full h-full bg-slate-800 top-0 left-0 flex items-center justify-center bg-opacity-20 duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      <div className='w-3/4 h-3/4 bg-white rounded-md shadow-md overflow-hidden '>
        <header className='w-full h-12 bg-blue-500 flex items-center justify-between px-3 '>
          <h1 className='text-white font-medium'>Add a new note</h1>
          <button
            onClick={closeInputHandler}
            className='bg-white size-7  flex items-center justify-center text-base rounded-sm shadow-md '>
            <GoX />
          </button>
        </header>
        <InputForm />
      </div>
    </section>
  );
};

InputContainer.propTypes = {
  closeInputHandler: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default InputContainer;
