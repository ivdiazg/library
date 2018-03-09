export class ProductModel {
  id?: string;
  codigo?: string;
  categoriaId?: number;
  nombre?: string;
  precioCosto?: number;
  precioVenta?: number;
  stock?: number;
  vigente?: boolean;
  fechaModificacion?: Date;
  usuarioId?: number;
}