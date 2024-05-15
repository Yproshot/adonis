import Comanda from '#models/comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  await Comanda.createMany([
    
    {mesa: '1',funcionarioId: 1, clienteId: 1, formaPagamentoId: 1, dataPagamento:20240505,data:20240505 ,id: 1},
    {mesa: '2',funcionarioId: 2, clienteId: 2, formaPagamentoId: 2, dataPagamento:20240505,data:20240505 ,id: 2},
    {mesa: '3',funcionarioId: 3, clienteId: 3, formaPagamentoId: 3, dataPagamento:20240505,data:20240505 ,id: 3},
  ])
  }
}