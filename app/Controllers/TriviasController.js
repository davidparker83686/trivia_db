import { ProxyState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";






//Private
function _draw() {
  let trivias = ProxyState.trivias;
  let template = ''
  trivias.forEach(v => template += v.Template)

  document.getElementById("app").innerHTML = `${template}`
}

//Public
export default class TriviasController {
  constructor() {

    ProxyState.on("trivias", _draw);


    triviasService.getAllTrivias()
  }


  getAll(url) {
    triviasService.getAllTrivias(url)
  }
}