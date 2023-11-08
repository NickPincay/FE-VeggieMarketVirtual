import { IProductoLocal, ICategoria } from './../interfaces/iproducto-local';

export const categorias: ICategoria[] = [
    { id: 1, nombre: 'Hojas Verdes' },
    { id: 2, nombre: 'De Raíz' },
    { id: 3, nombre: 'De Fruto' },
    { id: 4, nombre: 'Comunidad' }
];
 
export const productsLocalData: IProductoLocal[] = [
    {
        id: 1, nombre: 'Espinaca Fresca Orgánica', categoria: categorias[0], precio: 3.99, cantidad: 40, imagenUrl: 'EspinacaFrescaOrgánica',
        descripcion: 'Espinaca fresca y orgánica. Ideal para ensaladas y smoothies.', nombreAgricultor: 'Antonio García López',
        cosecha: new Date('2023-10-01')
    },
    {
        id: 2, nombre: 'Kale (Col Rizada)', categoria: categorias[0], precio: 4.50, cantidad: 35, imagenUrl: 'Kale',
        descripcion: 'Kale fresca, una gran adición a tus comidas saludables.', nombreAgricultor: 'Marta Rodríguez Sánchez',
        cosecha: new Date('2023-09-15'), descuento: 5
    },
    {
        id: 3, nombre: 'Lechuga Romana Orgánica', categoria: categorias[0], precio: 2.99, cantidad: 50, imagenUrl: 'LechugaRomanaOrgánica',
        descripcion: 'Lechuga romana fresca y orgánica para tus ensaladas favoritas.', nombreAgricultor: 'Jorge Martínez Pérez',
        cosecha: new Date('2023-10-10')
    },
    {
        id: 4, nombre: 'Escarola Fresca', categoria: categorias[0], precio: 3.25, cantidad: 30, imagenUrl: 'EscarolaFresca',
        descripcion: 'Escarola fresca para añadir sabor a tus platos.', nombreAgricultor: 'Elena Ruiz Fernández',
        cosecha: new Date('2023-09-25')
    },
    {
        id: 5, nombre: 'Acelga Orgánica', categoria: categorias[0], precio: 4.75, cantidad: 25, imagenUrl: 'AcelgaOrgánica',
        descripcion: 'Acelga fresca y orgánica para tus recetas saludables.', nombreAgricultor: 'David Serrano Gómez',
        cosecha: new Date('2023-10-05'), descuento: 12
    },
    {
        id: 6, nombre: 'Berros Frescos', categoria: categorias[0], precio: 3.50, cantidad: 28, imagenUrl: 'BerrosFrescos',
        descripcion: 'Berros frescos y sabrosos para tus ensaladas y platos frescos.', nombreAgricultor: 'Laura Moreno Díaz',
        cosecha: new Date('2023-09-20'), descuento: 15
    },
    {
        id: 7, nombre: 'Espinaca Baby', categoria: categorias[0], precio: 5.25, cantidad: 22, imagenUrl: 'EspinacaBaby',
        descripcion: 'Espinaca baby fresca y tierna para tus comidas.', nombreAgricultor: 'Francisco Jiménez Muñoz',
        cosecha: new Date('2023-10-12')
    },
    {
        id: 8, nombre: 'Hoja de Mostaza', categoria: categorias[0], precio: 3.75, cantidad: 25, imagenUrl: 'HojadeMostaza',
        descripcion: 'Hojas de mostaza frescas y picantes para dar sabor a tus platos.', nombreAgricultor: 'Sara Castro Vargas',
        cosecha: new Date('2023-09-30')
    },
    {
        id: 9, nombre: 'Rúcula Fresca', categoria: categorias[0], precio: 4.20, cantidad: 20, imagenUrl: 'RúculaFresca',
        descripcion: 'Rúcula fresca y con un toque picante para tus ensaladas.', nombreAgricultor: 'Manuel Navarro Ramirez',
        cosecha: new Date('2023-10-08'), descuento: 5
    },
    {
        id: 10, nombre: 'Hojas de Remolacha', categoria: categorias[0], precio: 4.99, cantidad: 18, imagenUrl: 'HojasdeRemolacha',
        descripcion: 'Hojas frescas de remolacha para platos saludables y deliciosos.', nombreAgricultor: 'Isabel Herrera Guerrero',
        cosecha: new Date('2023-09-22')
    },
    {
        id: 11, nombre: 'Zanahorias Frescas', categoria: categorias[1], precio: 2.25, cantidad: 45, imagenUrl: 'ZanahoriasFrescas',
        descripcion: 'Zanahorias frescas para tus platos favoritos.', nombreAgricultor: 'Andrés López Sánchez',
        cosecha: new Date('2023-10-10'), descuento: 10
    },
    {
        id: 12, nombre: 'Rábano Orgánico', categoria: categorias[1], precio: 1.99, cantidad: 60, imagenUrl: 'RábanoOrgánico',
        descripcion: 'Rábano orgánico fresco y delicioso para tus recetas.', nombreAgricultor: 'María Torres Gómez',
        cosecha: new Date('2023-09-25')
    },
    {
        id: 13, nombre: 'Papas Amarillas', categoria: categorias[1], precio: 3.50, cantidad: 55, imagenUrl: 'PapasAmarillas',
        descripcion: 'Papas amarillas frescas y de excelente calidad.', nombreAgricultor: 'Andrés López Sánchez',
        cosecha: new Date('2023-10-15'), descuento: 12
    },
    {
        id: 14, nombre: 'Betarragas Orgánicas', categoria: categorias[1], precio: 2.75, cantidad: 50, imagenUrl: 'BetarragasOrgánicas',
        descripcion: 'Betarragas orgánicas frescas, ideales para ensaladas.', nombreAgricultor: 'María Torres Gómez',
        cosecha: new Date('2023-09-30')
    },
    {
        id: 15, nombre: 'Cebollas Frescas', categoria: categorias[1], precio: 1.80, cantidad: 65, imagenUrl: 'CebollasFrescas',
        descripcion: 'Cebollas frescas de calidad para tus platos.', nombreAgricultor: 'Andrés López Sánchez',
        cosecha: new Date('2023-10-20')
    },
    {
        id: 16, nombre: 'Nabo de Temporada', categoria: categorias[1], precio: 2.15, cantidad: 40, imagenUrl: 'NaboTemporada',
        descripcion: 'Nabo fresco y de temporada para tus recetas favoritas.', nombreAgricultor: 'María Torres Gómez',
        cosecha: new Date('2023-09-20')
    },
    {
        id: 17, nombre: 'Ramas de Apio', categoria: categorias[1], precio: 1.99, cantidad: 60, imagenUrl: 'RamasApio',
        descripcion: 'Ramas frescas de apio para tus sopas y platos.', nombreAgricultor: 'Andrés López Sánchez',
        cosecha: new Date('2023-10-25')
    },
    {
        id: 18, nombre: 'Papas Nuevas', categoria: categorias[1], precio: 3.75, cantidad: 55, imagenUrl: 'PapasNuevas',
        descripcion: 'Papas nuevas frescas y deliciosas para tus recetas.', nombreAgricultor: 'María Torres Gómez',
        cosecha: new Date('2023-09-28'), descuento: 5
    },
    {
        id: 19, nombre: 'Rábanos Frescos', categoria: categorias[1], precio: 1.50, cantidad: 70, imagenUrl: 'RábanosFrescos',
        descripcion: 'Rábanos frescos ideales para tus ensaladas y platos frescos.', nombreAgricultor: 'Andrés López Sánchez',
        cosecha: new Date('2023-10-30')
    },
    {
        id: 20, nombre: 'Cebollines Tiernos', categoria: categorias[1], precio: 2.50, cantidad: 50, imagenUrl: 'CebollinesTiernos',
        descripcion: 'Cebollines tiernos y frescos para tus platos especiales.', nombreAgricultor: 'María Torres Gómez',
        cosecha: new Date('2023-09-22'), descuento: 10
    },
    {
        id: 21, nombre: 'Tomates Orgánicos', categoria: categorias[2], precio: 4.25, cantidad: 35, imagenUrl: 'TomatesOrgánicos',
        descripcion: 'Tomates frescos y orgánicos para tus platos favoritos.', nombreAgricultor: 'Pedro Gómez García',
        cosecha: new Date('2023-10-10')
    },
    {
        id: 22, nombre: 'Pepinos Frescos', categoria: categorias[2], precio: 3.50, cantidad: 40, imagenUrl: 'PepinosFrescos',
        descripcion: 'Pepinos frescos y crujientes, ideales para ensaladas.', nombreAgricultor: 'Luisa Fernández Martínez',
        cosecha: new Date('2023-09-25'), descuento: 8
    },
    {
        id: 23, nombre: 'Pimientos Rojos', categoria: categorias[2], precio: 2.75, cantidad: 50, imagenUrl: 'PimientosRojos',
        descripcion: 'Pimientos rojos frescos y jugosos para tus recetas favoritas.', nombreAgricultor: 'Javier Sánchez Rodríguez',
        cosecha: new Date('2023-10-15')
    },
    {
        id: 24, nombre: 'Calabazas Frescas', categoria: categorias[2], precio: 3.25, cantidad: 45, imagenUrl: 'CalabazasFrescas',
        descripcion: 'Calabazas frescas y sabrosas para tus platos saludables.', nombreAgricultor: 'Pedro Gómez García',
        cosecha: new Date('2023-09-30'), descuento: 5
    },
    {
        id: 25, nombre: 'Berengenas Orgánicas', categoria: categorias[2], precio: 3.99, cantidad: 38, imagenUrl: 'BerengenasOrgánicas',
        descripcion: 'Berengenas orgánicas frescas para tus recetas gourmet.', nombreAgricultor: 'Luisa Fernández Martínez',
        cosecha: new Date('2023-10-20')
    },
    {
        id: 26, nombre: 'Fresas del Huerto', categoria: categorias[2], precio: 5.50, cantidad: 30, imagenUrl: 'FresasdelHuerto',
        descripcion: 'Fresas frescas y dulces directas del huerto para tus postres.', nombreAgricultor: 'Javier Sánchez Rodríguez',
        cosecha: new Date('2023-09-20'), descuento: 10
    },
    {
        id: 27, nombre: 'Melones Dulces', categoria: categorias[2], precio: 4.75, cantidad: 35, imagenUrl: 'MelonesDulces',
        descripcion: 'Melones dulces y jugosos, ideales para el verano.', nombreAgricultor: 'Pedro Gómez García',
        cosecha: new Date('2023-10-25')
    },
    {
        id: 28, nombre: 'Sandías Refrescantes', categoria: categorias[2], precio: 6.25, cantidad: 28, imagenUrl: 'SandíasRefrescantes',
        descripcion: 'Sandías refrescantes y jugosas para combatir el calor.', nombreAgricultor: 'Luisa Fernández Martínez',
        cosecha: new Date('2023-09-28')
    },
    {
        id: 29, nombre: 'Cerezas Dulces', categoria: categorias[2], precio: 7.20, cantidad: 25, imagenUrl: 'CerezasDulces',
        descripcion: 'Cerezas dulces y frescas, perfectas como snack saludable.', nombreAgricultor: 'Javier Sánchez Rodríguez',
        cosecha: new Date('2023-10-30')
    },
    {
        id: 30, nombre: 'Uvas Frescas', categoria: categorias[2], precio: 8.50, cantidad: 20, imagenUrl: 'UvasFrescas',
        descripcion: 'Uvas frescas y deliciosas para disfrutar en cualquier momento.', nombreAgricultor: 'Pedro Gómez García',
        cosecha: new Date('2023-09-22'), descuento: 10
    }
];
