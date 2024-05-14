import ProdutoIngrediente from '#models/produto_ingrediente'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutoIngredientesController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perpage = request.input('perpage', 10)

    return await ProdutoIngrediente.query().paginate(page, perpage)
  }

  async show({ params }: HttpContext) {
    return await ProdutoIngrediente.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {

    const dados = request.only([
        'produtoId', 'ingredienteId'
    ])

    return await ProdutoIngrediente.create(dados)
  }

  async update({ params, request }: HttpContext) {

    const produtoingrediente = await ProdutoIngrediente.findOrFail(params.id)
    
    const dados = request.only([
      'produtoId', 'ingredienteId'
    ])

    produtoingrediente.merge(dados)
    return await produtoingrediente.save() 
  }

  async destroy( { params }: HttpContext) {

    const produtoingrediente = await ProdutoIngrediente.findOrFail(params.id)
    
   await produtoingrediente.delete()

   return {msg: 'registro deletado com sucesso', produtoingrediente}
  }

}