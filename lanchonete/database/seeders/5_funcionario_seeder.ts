import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Funcionario.createMany([
      {nome: 'João', cpf: 11111111111 ,endereco: 'rua joao', sexo: 'M', telefone: 61999999999, cargoId: 1, id: 1},
      {nome: 'Maria', cpf: 22222222222 ,endereco: 'rua maria', sexo: 'F', telefone: 61999999999, cargoId: 2, id: 2},
      {nome: 'Pedro', cpf: 33333333333 ,endereco: 'rua pedro', sexo: 'M', telefone: 61999999999, cargoId: 3, id: 3},
      {nome: 'Larissa', cpf: 44444444444 ,endereco: 'rua larissa', sexo: 'F', telefone: 61999999999, cargoId: 4, id: 4},
      {nome: 'Lucas', cpf: 55555555555 ,endereco: 'rua lucas', sexo: 'M', telefone: 61999999999, cargoId: 5, id: 5},
    ])
  }
}