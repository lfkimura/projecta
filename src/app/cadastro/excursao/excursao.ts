export class Excursao {
  constructor(
    public id: number,
    public nome: string,
    public local: string,
    public vagas: number,
    public data: string,
    public tipo: string,
    public preco: number,
    public extras?: string
  ) {  }
}