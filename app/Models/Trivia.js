

export default class Trivia {


  constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {

    this.category = category
    this.type = type
    this.difficulty = difficulty
    this.question = question
    this.correct_answer = correct_answer
    this.incorrect_answers = incorrect_answers
  }



  get Template() {

    return /*html*/`
            <div class="card col-md-3 m-5" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.question}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${this.category}</h6>

                    <p>${this.allAnswers}</p>





<div><a href="#" class="btn btn-primary title="check" type="button" data-toggle="modal"  data-target="#view-answer${this.id}">Check answer</a> </div>

                
                     <div class="modal fade" id="view-answer${this.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="align-self: center;">
                        <h5 class="modal-title text-dark" id="exampleModalLabel">${this.correct_answer}</h5>
                    </div>
                    <div style="align-self: center;">
                        <button type="button" title="Keep" class="btn btn-info mx-5 my-3"
                            data-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>
                </div>
            </div>
      `
  }

  allAnswers() {
    answers = []
    answers.push(correct_answer)
    answers.push(incorrect_answers)
    shuffledanswers = shuffle(answers.slice())

    return answers
  }

}




