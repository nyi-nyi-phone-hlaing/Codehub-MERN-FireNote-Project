import { useState } from "react";
import InputContainer from "../components/InputContainer";
import DetailContainer from "../components/DetailContainer";
import Navbar from "../components/Navbar";
import NoteContainer from "../components/NoteContainer";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openInputHandler = () => {
    setIsOpen(true);
  };

  const closeInputHandler = () => {
    setIsOpen(false);
  };

  return (
    <section className='relative bg-neutral-100 w-1/2 h-screen'>
      <Navbar openInputHandler={openInputHandler} />
      <InputContainer closeInputHandler={closeInputHandler} isOpen={isOpen} />
      <NoteContainer />
      <DetailContainer />
    </section>
  );
};

export default Main;
