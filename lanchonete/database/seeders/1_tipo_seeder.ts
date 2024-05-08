import Tipo from '../../app/models/tipo.js'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Tipo.createMany([
      {nome: 'Bebidas'},
      {nome: 'hamburguers'},
      {nome: 'Sobremesas'},
      {nome: 'hot-dog'},
      {nome: 'porções'},
    ])
  }
}