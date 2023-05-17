const { ERROR_TYPE } = require('../helpers/dictionary')
const { httpError } = require('../helpers/httpError')
const { Winner } = require('../models/winner')
const getWinners = async (req, res) => {
  try {
    await Winner.sync()
    const winners = await Winner.findAll()
    if (winners) {
      res.status(200).json({ winners })
    }
  } catch (error) {
    httpError(error, res)
  }
}
const getWinner = async (req, res) => {
  const { id } = req.params
  try {
    await Winner.sync()
    const winner = await Winner.findOne({ where: { id } })
    if (winner) {
      res.status(200).json({ winner })
    } else {
      res.status(404).json({ message: ERROR_TYPE.notFound })
    }
  } catch (error) {
    httpError(error, res)
  }
}
const createWinner = async (req, res) => {
  const { name, time } = req.body

  try {
    await Winner.sync()
    const winnerCreated = await Winner.create({ name, date: time })

    if (winnerCreated) {
      res.status(201).json({ message: 'Winner created successfully' })
    }
  } catch (error) {
    httpError(error, res)
  }
}

const uptadeWinner = async (req, res) => {
  const { id } = req.params

  const { name } = req.body

  try {
    await Winner.sync()
    const winner = await Winner.findOne({ where: { id } })

    if (winner) {
      await Winner.update({ name }, {
        where: { id }
      })
      res.status(200).json({ message: 'Winner updated successfully' })
      return
    }

    res.status(404).json({ message: ERROR_TYPE.notFound })
  } catch (error) {
    httpError(error, res)
  }
}

const delteWinner = async (req, res) => {
  const { id } = req.params
  try {
    await Winner.sync()
    const winner = await Winner.findOne({ where: { id } })
    if (winner) {
      await Winner.destroy({ where: { id } })
      res.status(200).json({ message: 'Winner deleted successfully' })
    }
  } catch (error) {
    httpError(error, res)
  }
}

module.exports = { getWinners, createWinner, getWinner, uptadeWinner, delteWinner }
