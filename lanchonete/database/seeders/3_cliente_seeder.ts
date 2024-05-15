import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Cliente.createMany([
      {nome: 'João', cpf: 11111111111 , telefone: 61999999999, email: 'j@j.com', id: 1},
      {nome: 'Maria', cpf: 22222222222 , telefone: 61999999999, email: 'm@m.com', id: 2},
      {nome: 'Pedro', cpf: 33333333333 , telefone: 61999999999, email: 'p@p.com', id: 3},
      {nome: 'Larissa', cpf: 44444444444 , telefone: 61999999999, email: 'l@l.com', id: 4},
      {nome: 'Lucas', cpf: 55555555555 , telefone: 61999999999, email: 'l@l.com', id: 5},
      {nome: 'Julia', cpf: 66666666666 , telefone: 61999999999, email: 'j@j.com', id: 6},
      {nome: 'Gabriel', cpf: 77777777777 , telefone: 61999999999, email: 'g@g.com', id: 7},
      {nome: 'Vitor', cpf: 88888888888 , telefone: 61999999999, email: 'v@v.com', id: 8},
      {nome: 'Juliana', cpf: 99999999999 , telefone: 61999999999, email: 'j@j.com', id: 9},
      {nome: 'Vinicius', cpf: 10101010101 , telefone: 61999999999, email: 'v@v.com',  id: 10},
    ])
  }
}