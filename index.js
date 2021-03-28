const express = require('express')
const { createCanvas } = require('canvas')
const app = express()
const { defaultParams } = require('./helpers/defaults')
const getLettersOfName = require('./helpers/getLettersOfName')
const getBackgroundColor = require('./helpers/getBackgroundColor')

app.get('/', (req, res) => {

  const params = {
    ...defaultParams,
    ...req.query,
  }

  const canvas = createCanvas(Number(params.size), Number(params.size))
  const bg = canvas.getContext('2d')
  bg.fillStyle = params.bg || getBackgroundColor(params.name)
  bg.fillRect(0, 0, canvas.width, canvas.height)

  const name = canvas.getContext('2d')
  const fontSize = canvas.width * 0.34
  name.font = `${params.weight} ${params.font || fontSize}px Arial`
  name.fillStyle = '#FFFFFF'

  const text = getLettersOfName(params.name)
  name.textBaseline = 'middle';
  name.textAlign = 'center';
  name.fillText(text, (canvas.width/2), (canvas.width/2));

  res.writeHead(200,{'Content-Type': 'image/png'})
  res.end(canvas.toBuffer())

})

app.listen(process.env.PORT || 5000)
