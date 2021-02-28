/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [
        {
            question: "1.The recorded raw EEG data signals are stored in which data format:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "European data format(.edf file)", ///// Write the option 1 inside double quotes
                b: "PNG", ///// Write the option 2 inside double quotes
                c: "DOC", ///// Write the option 2 inside double quotes
                d: "PDF File", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    
        {
            question: "2.Which of the following are the EEG signal analysis method:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Wavelet Transform", ///// Write the option 1 inside double quotes
                b: "Principle Component Analysis(PCA)", ///// Write the option 2 inside double quotes
                c: "Power spectral Density(PSD)", ///// Write the option 2 inside double quotes
                d: "All the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },


        {
            question: "3.The open source web application for visualization and processing of EEG signals are:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Brainstorm", ///// Write the option 1 inside double quotes
                b: "Fieldtrip", ///// Write the option 2 inside double quotes
                c: "Only 1", ///// Write the option 2 inside double quotes
                d: "Both 1 & 2", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },


        {
            question: "ERP refers to", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Variations in EEG data in response to cognitive performance", ///// Write the option 1 inside double quotes
                b: "Small changes in the scalp-recorded electroencephalogram to the onset of cognitive task", ///// Write the option 2 inside double quotes
                c: "Weaker rhythmic patterns responsible for an input stimuli", ///// Write the option 2 inside double quotes
                d: "All the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
