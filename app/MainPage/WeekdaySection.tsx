import { MdOutlineArrowForward } from "react-icons/md";

type Trip = {
  id: number;
  time: string;
  ship: string;
  company: string;
  origin: string;
  destination: string;
};

export type WeekdaySectionProps = {
  weekday: string;
  trips: Trip[];
};

export function WeekdaySection({ weekday, trips }: WeekdaySectionProps) {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-white font-bold font-open uppercase">{weekday}</h3>
      {trips.map((trip) => (
        <div
          className="flex flex-row items-center gap-2 bg-white h-16 rounded-lg text-darkBlue p-2"
          key={trip.id}
        >
          <div className="font-bold text-xl">{trip.time}</div>
          <div className="flex flex-col gap-1 text-xs">
            <div className="font-bold">{trip.ship}</div>
            <div className="italic text-gray-600">{`(${trip.company})`}</div>
          </div>
          <div className="flex flex-row items-center gap-2 ml-auto text-gray-600">
            <div className="text-sm">{trip.origin}</div>
            <MdOutlineArrowForward />
            <div className="text-sm">{trip.destination}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
