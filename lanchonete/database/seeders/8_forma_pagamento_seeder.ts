import FormaPagamento from '#models/forma_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  await FormaPagamento.createMany([
    {id: 1, nome: 'Dinheiro'},
    {id: 2, nome: 'Cartão de Credito'},
    {id: 3, nome: 'Cartão de Debito'},
    {id: 4, nome: 'Pix'}
  ])
  }
}