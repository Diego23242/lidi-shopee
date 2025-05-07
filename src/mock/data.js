const products = [
  {
    id: 1,
    name: "Funda de felpa",
    price: 300,
    image: "/img/fondo1.jpeg",
    description: "Protector de lente de expresión de felpa y estilo de moda.",
    category: "Funda",
    isPopular: true,
    discount: 15
  },
  {
    id: 2,
    name: "Funda Linda",
    price: 65,
    image: "/img/fondo2.jpeg",
    description: "Funda linda para teléfono con decoración de orejas de conejo.",
    category: "Funda",
    isNew: true
  },
  {
    id: 3,
    name: "Funda de Stitch",
    price: 65,
    image: "/img/fondo3.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    isPopular: true
  },
  {
    id: 4,
    name: "Funda de Gato",
    price: 19.99,
    image: "/img/fondo4.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 5,
    name: "Funda de Corazón",
    price: 30.99,
    image: "/img/fondo5.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 6,
    name: "Funda de Conejo",
    price: 30.99,
    image: "/img/fondo6.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 7,
    name: "Funda de Capibara",
    price: 30.99,
    image: "/img/fondo7.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 8,
    name: "Funda de Corazón espejo",
    price: 30.99,
    image: "/img/fondo8.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 9,
    name: "Funda de Elefantito",
    price: 30.99,
    image: "/img/fondo9.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 10,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo10.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 11,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo11.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 12,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo12.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 13,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo13.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 14,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo14.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 15,
    name: "Funda de Sandía",
    price: 30.99,
    image: "/img/fondo15.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 16,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo16.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 17,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo17.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 18,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo18.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 19,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo19.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 20,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo20.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 21,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo21.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 22,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo22.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 23,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo23.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 24,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo24.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 25,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo25.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 26,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo26.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 27,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo27.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 28,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo28.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 29,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo29.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 30,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo30.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 31,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo31.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 32,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo32.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 33,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo33.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 34,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo34.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 35,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo35.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 36,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo36.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 37,
    name: "Funda de Nice",
    price: 30.99,
    image: "/img/fondo37.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 38,
    name: "Funda de Tiburon",
    price: 30.99,
    image: "/img/fondo38.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 39,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo39.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 40,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo40.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 41,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo41.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 42,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo42.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 43,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo43.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 44,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo44.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 45,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo45.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 46,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo46.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 47,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo47.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 48,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo48.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 49,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo49.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 50,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo50.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 51,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo51.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 52,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo52.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 53,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo53.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 54,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo54.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 55,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo55.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 56,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo56.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 57,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo57.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 58,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo58.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 59,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo59.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
  {
    id: 60,
    name: "Funda de Espejo",
    price: 30.99,
    image: "/img/fondo60.jpeg",
    description: "Funda adorable y para llevar siempre contigo.",
    category: "accesorios",
    discount: 20
  },
];

export default products;