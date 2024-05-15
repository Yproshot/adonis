import ProdutosComanda from '#models/produtos_comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  await ProdutosComanda.createMany([
    {produtoId: 1, comandaId: 1, quantidade: 1, id: 1},
    {produtoId: 2, comandaId: 2, quantidade: 1, id: 2},
    {produtoId: 3, comandaId: 3, quantidade: 1, id: 3},
    {produtoId: 4, comandaId: 4, quantidade: 1, id: 4},
    {produtoId: 5, comandaId: 1, quantidade: 1, id: 5},
  ])
  }
}