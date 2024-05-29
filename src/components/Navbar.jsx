import { GoPlus } from "react-icons/go";
import PropTypes from "prop-types";
const Navbar = ({ openInputHandler, error, total }) => {
  return (
    <nav className='w-full h-14 bg-blue-500 flex items-center justify-between px-3'>
      <h1 className='text-xl font-bold text-white'>FireNote</h1>

      <div className='flex items-center gap-2'>
        {!error && (
          <>
            <p className='bg-blue-600 py-1 px-2 rounded-md text-sm text-white'>
              Total Notes - {total}
            </p>
            <button
              className='text-sm bg-white py-1 px-2  flex items-center justify-center rounded-md shadow-md'
              onClick={openInputHandler}>
              <GoPlus className='text-xl mr-1' />
              Add Note
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  openInputHandler: PropTypes.func,
  error: PropTypes.any,
  total: PropTypes.number,
};

export default Navbar;
