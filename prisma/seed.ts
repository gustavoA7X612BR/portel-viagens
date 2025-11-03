import { PrismaClient } from "../lib/generated/prisma-client";

const prisma = new PrismaClient();

async function main() {
   await prisma.company.createMany({
    data: [
      { id: 1, name: "Navegação Bom Jesus" },
      { id: 2, name: "JCM Navegações" },
      { id: 3, name: "TR Barbosa Nav" },
      { id: 4, name: "MT Navegação" },
      { id: 5, name: "Junior Navegação" }
    ],
    skipDuplicates: true
  })

  await prisma.address.createMany({
    data: [
      { description: "Porto Rei Salomão, Av. Bernardo Sayão, 4472 B, Guamá", city: "Belém", companyId: 3 },
      { description: "Av. Bernardo Sayão, 4340, Guamá (ao lado do Portal Show, próximo ao Porto do Lírio do Marajó)", city: "Belém", companyId: 2 },
      { description: "Porto Bom Jesus, Trav. Pimenta Bueno, 123, Jurunas (ao lado do Porto do Lírio)", city: "Belém", companyId: 1 },
      { description: "Porto Júnior (antigo Porto Fureza), Av. Bernardo Sayão, 1224, Jurunas (ao lado do Porto Comercial)", city: "Belém", companyId: 5 },
      { description: "Porto Mega, Av. Bernardo Sayão, 2050 A, Jurunas", city: "Belém", companyId: 4 }
    ],
    skipDuplicates: true
  })

  await prisma.ship.createMany({
    data: [
      { id: 1, name: "Bom Jesus", companyId: 1 },
      { id: 2, name: "Comandante Sid", companyId: 2 },
      { id: 3, name: "Junior", companyId: 5 },
      { id: 4, name: "Rei Salomão", companyId: 3 },
      { id: 5, name: "Luan", companyId: 5 },
      { id: 6, name: "Rio Gurupatuba II", companyId: 4 }
    ],
    skipDuplicates: true
  })

  await prisma.trip.createMany({
    data: [
      { weekday: 1, time: "17:00", shipId: 1, origin: "Belém", destination: "Portel" },
      { weekday: 1, time: "17:00", shipId: 2, origin: "Belém", destination: "Portel" },
      { weekday: 1, time: "17:00", shipId: 3, origin: "Belém", destination: "Portel" },
      { weekday: 1, time: "16:00", shipId: 4, origin: "Portel", destination: "Belém" },
      { weekday: 2, time: "17:00", shipId: 4, origin: "Belém", destination: "Portel" },
      { weekday: 2, time: "15:00", shipId: 3, origin: "Portel", destination: "Belém" },
      { weekday: 2, time: "17:00", shipId: 5, origin: "Belém", destination: "Portel" },
      { weekday: 2, time: "18:00", shipId: 6, origin: "Belém", destination: "Portel" },
      { weekday: 2, time: "16:00", shipId: 1, origin: "Portel", destination: "Belém" },
      { weekday: 2, time: "17:00", shipId: 2, origin: "Portel", destination: "Belém" },
      { weekday: 3, time: "15:00", shipId: 5, origin: "Portel", destination: "Belém" },
      { weekday: 3, time: "17:00", shipId: 3, origin: "Belém", destination: "Portel" },
      { weekday: 3, time: "17:00", shipId: 1, origin: "Belém", destination: "Portel" },
      { weekday: 4, time: "14:00", shipId: 6, origin: "Portel", destination: "Belém" },
      { weekday: 4, time: "17:00", shipId: 4, origin: "Belém", destination: "Portel" },
      { weekday: 4, time: "16:00", shipId: 1, origin: "Portel", destination: "Belém" },
      { weekday: 4, time: "17:00", shipId: 2, origin: "Belém", destination: "Portel" },
      { weekday: 5, time: "17:00", shipId: 4, origin: "Belém", destination: "Portel" },
      { weekday: 5, time: "15:00", shipId: 3, origin: "Portel", destination: "Belém" },
      { weekday: 5, time: "17:00", shipId: 1, origin: "Belém", destination: "Portel" },
      { weekday: 5, time: "17:00", shipId: 5, origin: "Belém", destination: "Portel" },
      { weekday: 5, time: "18:00", shipId: 6, origin: "Belém", destination: "Portel" },
      { weekday: 6, time: "18:00", shipId: 2, origin: "Portel", destination: "Belém" },
      { weekday: 6, time: "17:00", shipId: 1, origin: "Belém", destination: "Breves" },
      { weekday: 0, time: "16:00", shipId: 1, origin: "Portel", destination: "Belém" },
      { weekday: 0, time: "15:00", shipId: 5, origin: "Portel", destination: "Belém" },
      { weekday: 0, time: "14:00", shipId: 6, origin: "Portel", destination: "Belém" }
    ],
    skipDuplicates: true
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
