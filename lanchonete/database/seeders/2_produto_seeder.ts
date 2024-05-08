import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Produto.createMany([
      {nome: 'Coca-cola lata', preco: 6.5, tamanho: '330ml', tipoId: 1},
      {nome: 'Coca-cola 2L', preco: 10, tamanho: '2l', tipoId: 1},
      {nome: 'Coca-cola 600ml', preco: 8, tamanho: '600ml', tipoId: 1},
      {nome: 'Coca-cola ks', preco: 6.5, tamanho: '290ml', tipoId: 1},
    ])
  }
}