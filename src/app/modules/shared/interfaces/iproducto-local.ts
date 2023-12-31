export interface IProductoLocal {
    id:                 number
    nombre:             string
    categoria:          ICategoria
    precio:             number
    cantidad:           number
    imagenName:         string
    descripcion:        string
    nombreAgricultor:   string
    cosecha:            Date
    descuento?:         number
}

export interface ICategoria {
    id:                 number;
    nombre:             string;
}
