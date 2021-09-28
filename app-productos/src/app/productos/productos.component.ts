import { Component, OnInit } from '@angular/core';
import { producto } from './productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  tituloPagina: string = 'Lista de Productos'
  mostrarImagenes: boolean = false;
  
  private _filtrarProductos: string = '';
  get filtrarProductos(): string {
    return this._filtrarProductos;
  }

  set filtrarProductos(valor: string) {
    this._filtrarProductos = valor;
    console.log(valor);

    this.productosFiltrados = this.filtroProductos(valor)
  }

  productosFiltrados : producto[] = []

  toggleImagenes(): void{
    this.mostrarImagenes = !this.mostrarImagenes;
  }
  
  Productos: producto[] = [
    {
      id: 1,
      nombre: "audifonos bluetooth",
      codigo: "BL-50",
      disponibilidad: false,
      precio: 2000,
      rating: 4,
      imgURL: '../assets/imagenes/img.png'
    },
    {
      id: 2,
      nombre: "MacBook Pro",
      codigo: "MP-30",
      disponibilidad: false,
      precio: 25000,
      rating: 3.5,
      imgURL: '../assets/imagenes/img.png'

    },
    {
      id: 3,
      nombre: "Android A20",
      codigo: "AC-20",
      disponibilidad: false,
      precio: 12000,
      rating: 4.5,
      imgURL: '../assets/imagenes/img.png'

    }
  ]
  constructor() { }

filtroProductos(filtrarPor: string): producto[]{
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.Productos.filter((productos: producto) => productos.nombre.toLocaleLowerCase().includes(filtrarPor))
}

  ngOnInit(): void {
    this.filtrarProductos = '';
  }

}
