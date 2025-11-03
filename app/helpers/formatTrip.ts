import { TripWithRelations } from "./getTrips";

export default function formatTrip(trip: TripWithRelations) {
  return {
    id: trip.id,
    time: trip.time,
    ship: trip.ship.name,
    company: trip.ship.company.name,
    origin: trip.origin,
    destination: trip.destination,
  };
}
