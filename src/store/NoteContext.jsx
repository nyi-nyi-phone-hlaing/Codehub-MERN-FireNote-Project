import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NoteContext = createContext(null);

const NoteContextProvider = ({ children }) => {
  const [detail, setDetail] = useState({});
  const [view, setView] = useState(false);
  const hideNoteHandler = () => {
    setView(false);
  };
  return (
    <NoteContext.Provider
      value={{ setView, hideNoteHandler, view, detail, setDetail }}>
      {children}
    </NoteContext.Provider>
  );
};

NoteContextProvider.propTypes = {
  children: PropTypes.node,
};

export default NoteContextProvider;
