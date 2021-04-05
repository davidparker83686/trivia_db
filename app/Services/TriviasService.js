import { ProxyState } from "../AppState.js";
import Trivia from "../Models/Trivia.js";
import { api } from "../Services/AxiosService.js"

class TriviasService {
  async getAllTrivias(url) {
    let res = await api.get(url)
    ProxyState.trivias = res.data.results.map(t => new Trivia(t))

    console.log(ProxyState.trivias);
  }
}

export const triviasService = new TriviasService();

