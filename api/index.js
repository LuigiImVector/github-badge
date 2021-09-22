// Thanks to https://stackoverflow.com/questions/69164294/create-a-github-badge
import pupa from 'pupa'
import { readFileSync } from 'fs'
import { join } from 'path'
import { dirname } from 'dirname-filename-esm'

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const __dirname = dirname(import.meta);

export default (req, res) => {

  if(getParameterByName("color")="red") {
    const template = readFileSync(join(__dirname, '../red.svg'), 'utf8');
  } else if (getParameterByName("color")="blue") {
    const template = readFileSync(join(__dirname, '../blue.svg'), 'utf8');
  }


  let years = getParameterByName("years");
  //let { color } = req.query.color
  //const template = colorBadge({color});
  if (typeof years !== 'string') return res.status(400).end()
  res.setHeader('Content-Type', 'image/svg+xml')
  res.end(pupa(template, years))
}
