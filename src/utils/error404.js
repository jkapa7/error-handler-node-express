import { Link } from "react-router-dom";

export default function HandlerError() {
  return (
    <section className=" h-full flex flex-col items-center">
      <article className=" text-EAgreen-900 flex items-center flex-col mt-auto">
        <h2 className=" font-bold text-[30px] md:text-[5vw]">404 Not Found</h2>
        <p className=" font-medium text-base md:text-[2.5vw]">
          Este recurso no esta disponible
        </p>
      </article>
      <article className=" mb-auto">
        <Link to={"/"}>
          <button className=" text-EAgreen-light-900 bg-EAgreen m-9 px-5 py-3 rounded">
            Inicio
          </button>
        </Link>
      </article>
    </section>
  );
}
