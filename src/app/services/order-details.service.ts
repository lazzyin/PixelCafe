import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  constructor() {
   }

  CoffeDetails = [
    {
    id: 1,
    CoffeName: "Café Filtrado",
    CoffeDetails: "Preparado no método tradicional; filtro de papel",
    CoffePrice: 20,
    CoffeImg:'https://flavors.com.br/wp-content/uploads/2019/03/67569779.jpg'
  },
    {
    id: 2,
    CoffeName: "Macchiato",
    CoffeDetails: "Espresso tradicional ou com espuma de leite",
    CoffePrice: 20,
      CoffeImg: 'assets/cafeassets/machiatto.jpg',
  },
  
    {
    id: 3,
    CoffeName: "Avelã",
    CoffeDetails: "Espresso com leite e um toque de avelã. finalizado com chantily e calda de chocolate",
    CoffePrice: 20,
    CoffeImg:'assets/cafeassets/avela.jpg'
  },
  
    {
    id: 4,
    CoffeName: "Brigadeiro",
    CoffeDetails: "espresso com leite, finalizado com chocolate granulado",
    CoffePrice: 20,
    CoffeImg:'assets/cafeassets/brigadeiro.jpg'
  },
  
    {
    id: 5,
    CoffeName: "Café com leite",
    CoffeDetails: "Café preparado em filtro de papel com leite vaporizado",
    CoffePrice: 20,
    CoffeImg:'assets/cafeassets/cafe_leite.jpg'
  },
    {
    id: 6,
    CoffeName: "Prensa francesa",
    CoffeDetails: "Método de preparo que preserva a oleosidade, realçando o sabor do café. Perfeito para degustar com amigos",
    CoffePrice: 20,
    CoffeImg:'assets/cafeassets/prensa_fancesa.png'
  },
    {
    id: 7,
    CoffeName: "Café Latte",
    CoffeDetails: "Espresso, leite vaporizado e espuma de leite",
    CoffePrice: 20,
    CoffeImg:'assets/cafeassets/latte.jpg'
  },
    {
    id: 8,
    CoffeName: "Café Mocha",
    CoffeDetails: "Calda de chocolate ou chocolate branco, espresso, leite vaporizado e um toque de chantily",
    CoffePrice: 20,
    CoffeImg:'assets/cafeassets/mocha.webp'
  },
    {
    id: 9,
    CoffeName: "Cappucino Tradicional",
    CoffeDetails: "Espresso com leite cremoso",
    CoffePrice: 20,
    CoffeImg:'assets/cafeassets/cappuccino.jpg'
  },
  ]
}
