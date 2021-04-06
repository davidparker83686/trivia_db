

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
                <div class="card-header bg-info">
                  <h5 class="card-title">${this.question}</h5>
                </div>

                    <h6 class="card-subtitle mt-2 text-muted">${this.category}</h6>

                    <ul> 
                    ${this.allAnswers()}
                    </ul>





<div class="bottom"><a href="#" class="btn btn-primary  title="check" type="button" data-toggle="modal"  data-target="#view-answer${this.id}">Check answer</a> </div>

                
                     <div class="modal fade" id="view-answer${this.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="align-self: center;">
                        <h5 class="modal-title text-dark" id="exampleModalLabel">${this.correct_answer}</h5>
                    </div>

                    <div >

                        <button type="button" title="Keep" class="btn btn-info  mx-5 my-3"
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
    let answers = []
    answers.push(this.correct_answer)
    answers.push(...this.incorrect_answers)

    return this.shuffle(answers)
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    let template = ""
    array.forEach(banana => {
      template += `<li>${banana}</li>`
    });
    return template;
  }

}




