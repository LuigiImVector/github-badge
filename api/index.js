// Thanks to https://stackoverflow.com/questions/69164294/create-a-github-badge
import pupa from 'pupa'
import { readFileSync } from 'fs'
import { join } from 'path'
import { dirname } from 'dirname-filename-esm'

const __dirname = dirname(import.meta);
const template = readFileSync(join(__dirname, '../red.svg'), 'utf8');



export default (req, res) => {
  let { years } = req.query.years
  let color = req.query.color

  if(color == "red") {
    let { first } = "49B2F8F5"
    let { second } = "49B2F8"
  } else {
    let { first } = "49B2F8F5"
    let { second } = "49B2F8"
  }


  
  //let color = req.query.color
  
  //const template = colorBadge({color});
  if (typeof years !== 'string') return res.status(400).end()
  res.setHeader('Content-Type', 'image/svg+xml')
  res.end(pupa(template, [{ first }, { second }, { years }]))
}