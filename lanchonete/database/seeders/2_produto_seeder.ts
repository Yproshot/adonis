import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Produto.createMany([
      {nome: 'Coca-cola lata', preco: 6.5, tamanho: '330ml', tipoId: 1},
      {nome: 'Coca-cola 2L', preco: 10, tamanho: '2l', tipoId: 1},
      {nome: 'Coca-cola 600ml', preco: 8, tamanho: '600ml', tipoId: 1},
      {nome: 'Coca-cola ks', preco: 6.5, tamanho: '290ml', tipoId: 1},
      {nome: 'fanta lata', preco: 6.5, tamanho: '330ml', tipoId: 1},
      {nome: 'fanta 2L', preco: 10, tamanho: '2l', tipoId: 1},
      {nome: 'fanta 600ml', preco: 8, tamanho: '600ml', tipoId: 1},
      {nome: 'suco laranja', preco: 6.5, tamanho: '290ml', tipoId: 1},
      {nome: 'suco uva', preco: 6.5, tamanho: '290ml', tipoId: 1},
      {nome: 'suco goiaba', preco: 6.5, tamanho: '290ml', tipoId: 1},
      {nome: 'suco maracuja', preco: 6.5, tamanho: '290ml', tipoId: 1},
      {nome: 'suco manga', preco: 6.5, tamanho: '290ml', tipoId: 1},
      {nome: 'suco limao', preco: 6.5, tamanho: '290ml', tipoId: 1},
      {nome: 'x-salada', preco: 16, tamanho: 'hamburguer', tipoId: 2},
      {nome: 'x-bacon', preco: 18, tamanho: 'hamburguer', tipoId: 2},
      {nome: 'x-tudo', preco: 20, tamanho: 'hamburguer', tipoId: 2},
      {nome: 'x-frango', preco: 18, tamanho: 'hamburguer', tipoId: 2},
      {nome: 'sorvete', preco: 10, tamanho: '600ml', tipoId: 3},
      {nome: 'milkshake', preco: 15, tamanho: '600ml', tipoId: 3},
      {nome: 'hamburguer de carne', preco: 20, tamanho: 'hamburguer', tipoId: 2},
      {nome: 'hamburguer de frango', preco: 25, tamanho: 'hamburguer', tipoId: 2},
      {nome: 'hot-dog', preco: 12, tamanho: 'hot-dog', tipoId: 4},
      {nome: 'porção de batata frita', preco: 10, tamanho: 'porção', tipoId: 5},
      {nome: 'porção de macarrão', preco: 10, tamanho: 'porção', tipoId: 5},
      {nome: 'porção de queijo', preco: 10, tamanho: 'porção', tipoId: 5},
      {nome: 'porção de presunto', preco: 10, tamanho: 'porção', tipoId: 5},
      {nome: 'porção de queijo misto', preco: 10, tamanho: 'porção', tipoId: 5},
      {nome: 'porção de molho barbecue', preco: 10, tamanho: 'porção', tipoId: 5},
      {nome: 'porção de queijo branco', preco: 10, tamanho: 'porção', tipoId: 5},
    ])
  }
}