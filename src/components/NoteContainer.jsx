import Note from "./Note";

const NoteContainer = () => {
  return (
    <section className='w-full max-h-[calc(100%-3.5rem)]  p-2 gap-2 overflow-y-scroll grid grid-cols-2 '>
      <Note />
    </section>
  );
};

export default NoteContainer;
