import prisma from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma-client";

export type TripWithRelations = Prisma.TripGetPayload<{
  include: { ship: { include: { company: true } } };
}>;

export async function getTrips() {
  return (await prisma.trip.findMany({
    include: {
      ship: {
        include: {
          company: true,
        },
      },
    },
    orderBy: [{ weekday: "asc" }, { time: "asc" }],
  })) as TripWithRelations[];
}
