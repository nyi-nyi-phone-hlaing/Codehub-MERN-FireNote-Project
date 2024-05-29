import PropTypes from "prop-types";
import Note from "./Note";
import { MagnifyingGlass } from "react-loader-spinner";

const NoteContainer = ({ notes, loading, getNotes }) => {
  return (
    <section className='w-full max-h-[calc(100%-3.5rem)]  p-2 gap-2 overflow-y-scroll grid grid-cols-2 '>
      {loading && (
        <div className='z-0 absolute bottom-0 left-0 w-full h-[calc(100%-3.5rem)] flex flex-col items-center justify-center'>
          <MagnifyingGlass
            visible={true}
            height='80'
            width='80'
            ariaLabel='magnifying-glass-loading'
            wrapperStyle={{}}
            wrapperClass='magnifying-glass-wrapper'
            glassColor='#c0efff'
            color='#e15b64'
          />
        </div>
      )}
      {!loading && (
        <>
          {notes.length > 0 ? (
            notes.map((note) => {
              return <Note key={note.key} note={note} getNotes={getNotes} />;
            })
          ) : (
            <div className='z-0 absolute bottom-0 left-0 w-full h-[calc(100%-3.5rem)] flex flex-col items-center justify-center'>
              <h3 className='font-bold text-lg'>Welcome to FireNote</h3>
              <p>Press add note button to create note</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

NoteContainer.propTypes = {
  notes: PropTypes.array,
  loading: PropTypes.bool,
  getNotes: PropTypes.func,
};

export default NoteContainer;
