import Main from "./layouts/Main";
import NoteContextProvider from "./store/NoteContext";

function App() {
  return (
    <section className='bg-white w-full h-screen flex items-center justify-center font-poppins'>
      <NoteContextProvider>
        <Main />
      </NoteContextProvider>
    </section>
  );
}

export default App;
