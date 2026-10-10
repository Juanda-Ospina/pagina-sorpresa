export interface LetterPage {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface TicketData {
  airline: string;
  ticketNumber: string;
  passenger: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  date: string;
  time: string;
  seat: string;
  gate: string;
  note: string;
}

export const letterPages: LetterPage[] = [
  {
    eyebrow: "UNA ÚLTIMA COSA",
    title: "Hay regalos que se pueden envolver.",
    paragraphs: [
      "Y otros que se convierten en recuerdos para toda la vida.",
    ],
  },
  {
    eyebrow: "PREPARA TU MALETA",
    title: "¿Estás listo para una aventura mas?...",
    paragraphs: [
      "Deja espacio para nuevos paisajes, momentos especiales y una historia más para recordar juntos.",
    ],
  },
  {
    eyebrow: "NUESTRO PRÓXIMO RECUERDO",
    title: "¡Ve empacando tus maletas!",
    paragraphs: [
      "Nuestro próximo recuerdo comienza aquí.",
      "Porque los mejores regalos no siempre son cosas. Algunos son lugares, momentos y aventuras que podemos vivir juntos.",
    ],
  },
];

export const surpriseData = {
  destination: "SAN ANDRÉS",
  subtitle: "Nuestro próximo recuerdo comienza aquí.",
  message:
    "Prepara tu maleta. Nos espera una aventura, nuevos paisajes y una historia más para guardar en el corazón.",
  closingMessage: "Feliz cumpleaños. Este viaje apenas comienza.",

  tickets: [
    {
      airline: "UN VIAJE PARA RECORDAR",
      ticketNumber: "DE TU AMOR",
      passenger: "MR JUAN CARLOS GOMEZ ROJAS",
      origin: "MEDELLÍN",
      originCode: "MDE",
      destination: "SAN ANDRÉS",
      destinationCode: "ADZ",
      date: "11/11/2026",
      time: "15:28",
      seat: "POR ASIGNAR",
      gate: "POR CONFIRMAR",
      note: "Un nuevo recuerdo juntos",
    },
    {
      airline: "UN VIAJE PARA RECORDAR",
      ticketNumber: "DE TU AMOR",
      passenger: "MR JUAN CARLOS GOMEZ ROJAS",
      origin: "SAN ANDRÉS",
      originCode: "ADZ",
      destination: "MEDELLÍN",
      destinationCode: "MDE",
      date: "18/11/2026",
      time: "18:00",
      seat: "POR ASIGNAR",
      gate: "POR CONFIRMAR",
      note: "Nuestra próxima aventura",
    },
  ] satisfies TicketData[],
};;