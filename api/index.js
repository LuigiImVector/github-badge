// Thanks to https://stackoverflow.com/questions/69164294/create-a-github-badge
import pupa from 'pupa'
import { readFileSync } from 'fs'
import { join } from 'path'
import { dirname } from 'dirname-filename-esm'

const __dirname = dirname(import.meta);


export default (req, res) => {
  let { years } = req.query.years
  let color = req.query.color
  const template = readFileSync(join(__dirname, '../'+color.toString()+'.svg'), 'utf8');

  //const template = colorBadge({color});
  //if (typeof years !== 'string') return res.status(400).end()
  res.setHeader('Content-Type', 'image/svg+xml')
  res.end(pupa(template, { years }))
}