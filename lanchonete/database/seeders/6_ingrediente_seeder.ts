import Ingrediente from '#models/ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Ingrediente.createMany([
      {id: 1, nome: 'hamburguer', descricao: 'hamburguer artesanal'},
      {id: 2, nome: 'queijo', descricao: 'queijo artesanal'},
      {id: 3, nome: 'presunto', descricao: 'presunto artesanal'},
      {id: 4, nome: 'carne', descricao: 'carne artesanal'},
      {id: 5, nome: 'alface', descricao: 'alface artesanal'},
      {id:6, nome: 'tomate', descricao: 'tomate artesanal'},
      {id:7, nome: 'bacon', descricao: 'bacon artesanal'},
      {id:8, nome: 'ovo', descricao: 'ovo artesanal'},
      {id:9, nome: 'frango', descricao: 'frango artesanal'}
    ])
  }
}