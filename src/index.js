import express from 'express'
import { fetchResult } from './crud.js'

const app = express()
const port = 3000

app.use(express.json())


app.get('/*', async ({ url }, res) => {
  const data = await fetchResult(url) ?? `Result is not found on ${url}. Check your results folder.`

  res.json({ data })
})

app.listen(port, () => {
  console.log(`Shit api is listening on http://localhost:${port}/`)
})