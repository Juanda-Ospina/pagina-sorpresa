import image2 from "../assets/images/imagen2.jpg";
import image6 from "../assets/images/imagen6.jpg";
import image10 from "../assets/images/imagen10.jpg";

export interface StoryMoment {
  id: number;
  image: string;
  date?: string;
  title: string;
  description: string;
  align: "left" | "right";
}

export const storyMoments: StoryMoment[] = [
  {
    id: 1,
    image: image2,
    date: "El comienzo",
    title: "Todo comenzó con un momento.",
    description:
      "Sin saber todo lo que vendría después, comenzamos a escribir una historia que hoy significa muchísimo.",
    align: "left",
  },
  {
    id: 2,
    image: image6,
    date: "Un recuerdo",
    title: "Y llegaron los momentos que guardaríamos para siempre.",
    description:
      "Porque algunas fotografías no solamente capturan un instante, también guardan todo lo que sentimos en él.",
    align: "right",
  },
  {
    id: 3,
    image: image10,
    date: "Hasta hoy",
    title: "Y todavía quedan muchos recuerdos por crear.",
    description:
      "Esta historia todavía tiene muchas páginas por escribir... y algunas de ellas están a punto de comenzar.",
    align: "left",
  },
];