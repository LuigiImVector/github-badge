import pupa from 'pupa'
import { readFileSync } from 'fs'
import { join } from 'path'
import { dirname } from 'dirname-filename-esm'

const __dirname = dirname(import.meta)
const template = readFileSync(join(__dirname, '../badge.svg'), 'utf8')

export default (req, res) => {
  let { years } = req.query
  if (typeof years !== 'string') return res.status(400).end()
  res.setHeader('Content-Type', 'text/xml')
  res.end(pupa(template, { years }))
}