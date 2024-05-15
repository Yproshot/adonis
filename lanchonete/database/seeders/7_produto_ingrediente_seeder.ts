import ProdutoIngrediente from '#models/produto_ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  await ProdutoIngrediente.createMany([
    {ingredienteId: 1, produtoId: 1, id: 1},
    {ingredienteId: 2, produtoId: 1, id: 2},
    {ingredienteId: 3, produtoId: 1, id: 3},
    {ingredienteId: 4, produtoId: 1, id: 4},
    {ingredienteId: 5, produtoId: 1, id: 5},
    {ingredienteId: 6, produtoId: 4, id: 6},
    {ingredienteId: 7, produtoId: 4, id: 7},
    {ingredienteId: 8, produtoId: 4, id: 8},
  ])
  }
}