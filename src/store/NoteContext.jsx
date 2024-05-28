import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NoteContext = createContext(null);

const NoteContextProvider = ({ children }) => {
  const [view, setView] = useState(false);
  const viewNoteHandler = () => {
    setView(true);
  };
  const hideNoteHandler = () => {
    setView(false);
  };
  return (
    <NoteContext.Provider value={{ viewNoteHandler, hideNoteHandler, view }}>
      {children}
    </NoteContext.Provider>
  );
};

NoteContextProvider.propTypes = {
  children: PropTypes.node,
};

export default NoteContextProvider;
