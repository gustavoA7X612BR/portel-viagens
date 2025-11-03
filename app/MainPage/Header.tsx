import { MdSwapHoriz } from "react-icons/md";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 items-center">
      <h1 className="font-open font-bold text-2xl text-white uppercase">Viagens para Portel</h1>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-4">
          <h2 className="font-open font-bold  text-4xl text-white uppercase">Belém</h2>
          <MdSwapHoriz className="text-4xl" color="ffffff" />
          <h2 className="font-open font-bold  text-4xl text-white uppercase">Portel</h2>
        </div>
        <h2 className="font-open  font-bold text-2xl text-white uppercase">Horários atualizados</h2>
      </div>
    </header>
  );
}
