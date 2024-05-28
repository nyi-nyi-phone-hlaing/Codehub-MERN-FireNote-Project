import { GoX } from "react-icons/go";
import { NoteContext } from "../store/NoteContext";
import { useContext } from "react";

const DetailContainer = () => {
  const { view, hideNoteHandler } = useContext(NoteContext);
  return (
    <section
      className={`absolute w-full h-full bg-neutral-100 top-0 left-0 duration-300 ${
        view
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      <header className='w-full h-12 bg-blue-500 flex items-center justify-between px-3 '>
        <h1 className='text-white font-medium'>Note Details</h1>
        <button
          onClick={hideNoteHandler}
          className='bg-white size-7  flex items-center justify-center text-base rounded-sm shadow-md '>
          <GoX />
        </button>
      </header>
      <section className='w-full h-[calc(100%-3rem)] overflow-y-scroll p-2'>
        <h1 className='font-bold text-lg mb-1'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
          facere!
        </h1>
        <p className='text-base text-neutral-600 mb-1 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          velit dolore sapiente maiores ipsa voluptatem tempore nisi adipisci
          quod quidem natus quam eligendi, rerum aperiam architecto amet magnam,
          hic, expedita reprehenderit quisquam sed animi facilis? Esse, officiis
          unde adipisci impedit in sunt temporibus nesciunt labore suscipit
          ullam totam veniam quis ipsum eos assumenda rerum explicabo asperiores
          enim voluptate quibusdam praesentium. Ea exercitationem vel laborum
          autem mollitia dolorem, id nisi velit obcaecati, veritatis dolorum
          cumque eum necessitatibus aperiam eius in inventore quas ducimus
          vitae, soluta reprehenderit vero voluptas nulla. Saepe expedita
          repellat quidem aspernatur incidunt dicta modi corrupti, quae iste
          assumenda eos obcaecati ullam, totam molestias, soluta amet! Id, minus
          sequi! Hic deserunt fuga ratione natus debitis iste quaerat fugiat
          molestiae, blanditiis velit nam nihil error, itaque, voluptatum nobis
          iusto eaque odit dolor officia. Culpa quaerat error, excepturi velit
          blanditiis debitis quasi aliquam, voluptatibus atque sapiente, ut
          ratione mollitia! Molestiae expedita nostrum laudantium? Alias aliquam
          soluta expedita facilis, natus harum. Inventore autem dolorum nam
          tempora, doloremque magni recusandae! At eius reprehenderit magni,
          iusto voluptates eum consectetur incidunt, voluptatem fugiat, eligendi
          vitae? Est temporibus mollitia ratione autem animi nobis. Voluptatibus
          quibusdam minima, distinctio ab consectetur iste. Doloremque, fuga!
          Reprehenderit, voluptas harum! Atque.
        </p>
      </section>
    </section>
  );
};

export default DetailContainer;
