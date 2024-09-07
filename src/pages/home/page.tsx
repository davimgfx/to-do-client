import { Navbar } from '../../components/shared';

export default function HomePage() {
  return (
    <section className="max-w-5xl mx-auto">
      <Navbar />
      <main className="flex flex-col justify-center items-center text-center  w-full h-custom-height-nav">
        <h2 className="text-black font-bold text-6xl leading-tight">
          Gerencie suas tarefas <br />
          de forma fácil e segura
        </h2>
        <span className="text-lg mt-4">
          Organize seu fluxo de trabalho, defina prazos, e acompanhe o progresso
          de suas tarefas de qualquer lugar.
        </span>
      </main>
    </section>
  );
}
