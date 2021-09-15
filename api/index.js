function colorBadge(color) {
  switch(color) {
    case "red":
      return readFileSync(join(__dirname, '../red.svg'), 'utf8');
    case "blue":
      return readFileSync(join(__dirname, '../blue.svg'), 'utf8');
    default:
      return 0;
  }
}


// Thanks to https://stackoverflow.com/questions/69164294/create-a-github-badge
import pupa from 'pupa'
import { readFileSync } from 'fs'
import { join } from 'path'
import { dirname } from 'dirname-filename-esm'

const __dirname = dirname(import.meta);

export default (req, res) => {
  let { years } = req.query.years
  let { color } = req.query.color
  const template = colorBadge({color});
  if (typeof years !== 'string') return res.status(400).end()
  res.setHeader('Content-Type', 'image/svg+xml')
  res.end(pupa(template, { years }))
}