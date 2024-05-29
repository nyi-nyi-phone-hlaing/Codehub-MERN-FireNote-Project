import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import InputContainer from "../components/InputContainer";
import DetailContainer from "../components/DetailContainer";
import Navbar from "../components/Navbar";
import NoteContainer from "../components/NoteContainer";
import toastConfig from "../utils/toastConfig";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://firenote-mern-project-default-rtdb.firebaseio.com/notes.json"
      );

      if (!response.ok) {
        throw new Error("Cannot connect with firebase. Try again.");
      }

      const notes = await response.json();
      const modifiedNotes = [];
      for (const key in notes) {
        modifiedNotes.push({ ...notes[key], key });
      }

      setLoading(false);
      setNotes(modifiedNotes);
    } catch (error) {
      setError(error.message);
      toast.error("Something went wrong! Refresh again.", toastConfig);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const openInputHandler = () => {
    setIsOpen(true);
  };

  const closeInputHandler = () => {
    setIsOpen(false);
  };

  return (
    <section className='relative bg-neutral-100 w-1/2 h-screen'>
      <Navbar
        openInputHandler={openInputHandler}
        error={error}
        total={notes.length}
      />
      <InputContainer
        closeInputHandler={closeInputHandler}
        isOpen={isOpen}
        getNotes={getNotes}
      />
      {!error ? (
        <NoteContainer notes={notes} loading={loading} getNotes={getNotes} />
      ) : (
        <>
          <p>{error}</p>
        </>
      )}

      <DetailContainer />
      <ToastContainer />
    </section>
  );
};

export default Main;
