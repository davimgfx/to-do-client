import { FormRegister, Navbar } from '../../components';

export default function RegisterPage() {
  return (
    <section className="max-w-5xl mx-auto">
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full h-custom-height-nav">
        <FormRegister />
      </main>
    </section>
  );
}
