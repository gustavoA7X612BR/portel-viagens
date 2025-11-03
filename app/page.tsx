import Header from "./MainPage/Header";

import { ReactElement } from "react";
import { WeekdaySection } from "./MainPage/WeekdaySection";
import { getTrips, TripWithRelations } from "./helpers/getTrips";

// export const revalidate = 60 * 60 * 24 * 4;

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-fera",
  "Sábado",
];

export default async function Home() {
  const trips: TripWithRelations[] = await getTrips();

  const weekdaySections = weekdays.map((weekday, index) => (
    <WeekdaySection
      weekday={weekday}
      trips={trips
        .filter((trip) => trip.weekday == index)
        .map((trip) => {
          return {
            id: trip.id,
            time: trip.time,
            ship: trip.ship.name,
            company: trip.ship.company.name,
            origin: trip.origin,
            destination: trip.destination,
          };
        })}
      key={index + weekday}
    ></WeekdaySection>
  ));

  const sunday = weekdaySections.shift() as ReactElement;
  weekdaySections.push(sunday);

  return (
    <body className="flex flex-col gap-8 h-full bg-mainBlue p-8 text-white">
      <Header />
      <main className="flex flex-col gap-8">{weekdaySections}</main>
    </body>
  );
}
