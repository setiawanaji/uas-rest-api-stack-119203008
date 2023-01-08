const models = require('../models/post.model')
const response = require('../helpers/response')
const controllers = {}

controllers.all = async(req, res) => {
  try {
    const result = await models.all()
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error)
  }
}
controllers.detail = async(req, res) => {
  try {
    const {id} = req.params
    const result = await models.detail(id)
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error)
  }
}
controllers.store = async(req, res) => {
  try {
    const { title, description } = req.body
    const result = await models.store({title, description})
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error)
  }
}
controllers.update = async(req, res) => {
  try {
    const {id} = req.params
    const { title, description } = req.body
    const result = await models.update({id, title, description})
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error)
  }
}
controllers.destroy = async(req, res) => {
  try {
    const {id} = req.params
    const result = await models.destroy(id)
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error)
  }
}

module.exports = controllers