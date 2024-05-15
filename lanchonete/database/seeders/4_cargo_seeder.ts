import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Cargo.createMany([

      {id: 1, nome: 'Gerente'},
      {id: 2, nome: 'garcon'},
      {id: 3, nome: 'caixa'},
      {id: 4, nome: 'entregador'},
      {id: 5, nome: 'cozinheiro'},
    ])
  }
}