import { GoPlus, GoSync } from "react-icons/go";
import PropTypes from "prop-types";
const Navbar = ({ openInputHandler, getNotes }) => {
  return (
    <nav className='w-full h-14 bg-blue-500 flex items-center justify-between px-3'>
      <h1 className='text-xl font-bold text-white'>FireNote</h1>

      <div className='flex items-center gap-2'>
        <button
          className='text-sm bg-white py-1 px-2  flex items-center justify-center rounded-md shadow-md'
          onClick={getNotes}>
          <GoSync className='text-base mr-1' />
          Refresh
        </button>
        <button
          className='text-sm bg-white py-1 px-2  flex items-center justify-center rounded-md shadow-md'
          onClick={openInputHandler}>
          <GoPlus className='text-xl mr-1' />
          Add Note
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  openInputHandler: PropTypes.func,
  getNotes: PropTypes.func,
};

export default Navbar;
