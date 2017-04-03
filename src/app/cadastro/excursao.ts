export class Excursao {
  constructor(
    public id: number,
    public nome: string,
    public local: string,
    public vagas: number,
    public data: date,
    public tipo: string,
    public preco: string,
    public extras?: string
  ) {  }
}