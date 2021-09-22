// Thanks to https://stackoverflow.com/questions/69164294/create-a-github-badge
import pupa from 'pupa'
import { readFileSync } from 'fs'
import { join } from 'path'
import { dirname } from 'dirname-filename-esm'

const __dirname = dirname(import.meta);
const template = readFileSync(join(__dirname, '../red.svg'), 'utf8');

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default (req, res) => {
  let { years } = getParameterByName("years");

  if(getParameterByName("color")=="red") {
    let { first } = "49B2F8F5"
    let { second } = "49B2F8"
  } else if (getParameterByName("color")=="blue") {
    let { first } = "49B2F8F5"
    let { second } = "49B2F8"
  }


  
  //let color = req.query.color
  
  //const template = colorBadge({color});
  if (typeof years !== 'string') return res.status(400).end()
  res.setHeader('Content-Type', 'image/svg+xml')
  res.end(pupa(template, [{ first }, { second }, { years }]))
}


