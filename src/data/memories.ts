// import image1 from "../assets/images/imagen1.jpg";
// import image5 from "../assets/images/imagen5.jpg";
// import image6 from "../assets/images/imagen6.jpg";
// import image8 from "../assets/images/imagen8.jpg";
// import image10 from "../assets/images/imagen10.jpg";

export interface Memory {
  id: number;
  image: string;
  caption: string;
  rotation: number;
  size: "small" | "medium" | "large";
}

export const memories: Memory[] = [
  {
    id: 1,
    image: "/images/Imagen1.jpg",
    caption: "Lugares para recordar.",
    rotation: -3,
    size: "medium",
  },
  {
    id: 2,
    image: "/images/imagen6.jpg",
    caption: "Un momento de nunca olvidar.",
    rotation: 2,
    size: "large",
  },
  {
    id: 3,
    image: "/images/imagen5.jpg",
    caption: "Siempre hay una razón para sonreír.",
    rotation: -2,
    size: "small",
  },
  {
    id: 4,
    image: "/images/imagen10.jpg",
    caption: "Coleccionando momentos juntos.",
    rotation: 3,
    size: "medium",
  },
  {
    id: 5,
    image: "/images/imagen8.jpg"    ,
    caption: "Y todavía faltan muchos.",
    rotation: -1,
    size: "large",
  },
];