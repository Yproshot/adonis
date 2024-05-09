import Tipo from '../../app/models/tipo.js'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Tipo.createMany([
      {id: 1,nome: 'Bebidas'},
      {id: 2, nome: 'hamburguers'},
      {id: 3, nome: 'Sobremesas'},
      {id: 4, nome: 'hot-dog'},
      {id: 5, nome: 'porções'},
    ])
  }
}