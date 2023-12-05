const element1 = document.querySelector(".p1");


const card = document.querySelector(".card");
card.addEventListener("mouseover", (event) => {
  //element.style.setProperty('left', '0px');
  element1.classList.add("animate__animated", "animate__bounceInLeft");
  element1.style.setProperty("--animate-duration", "0.9s");
  });

card.addEventListener("mouseout", (event) => {
  element1.classList.remove("animate__animated", "animate__bounceInLeft");
  });
  
  
  
  // quiz app 


  const questions = [
    {
      ques: " What is HTML?",
      a: " HTML describes the structure of a webpage",
      b: " HTML is the standard markup language mainly used to create web pages",
      c: " HTML consists of a set of elements that helps the browser how to view the content",
      d: " All of the mentioned",
      correct: "d",
    },
    {
      ques: "HTML stands for __________",
      a: "HyperText Markup Language",
      b: "HyperText Machine Language",
      c: "HyperText Marking Language",
      d: "HighText Marking Language",
      correct: "a",
    },
    {
      ques: "What is the correct syntax of doctype in HTML5?",
      a: "</doctype html>",
      b: "<doctype html>",
      c: "<doctype html!>",
      d: "<!doctype html>",
      correct: "d",
    },
    {
      ques: "What is a CSS selector?",

      a: "A CSS selector is the CSS class name",
      b: "A CSS selector is the set of properties that are going to be applied on HTML elements",
      c: "A CSS selector is name of CSS file.",
      d: "A CSS selector is the first part of a CSS Rule. It may an HTML element or pattern of elements",
      correct: "d",
    },
    {
      ques: " What is HTML?",
      a: " HTML describes the structure of a webpage",
      b: " HTML is the standard markup language mainly used to create web pages",
      c: " HTML consists of a set of elements that helps the browser how to view the content",
      d: " All of the mentioned",
    },
  ];

  let index = 0;
  let total = questions.length;
  let right = 0;
  let wrong = 0;
  const quesBox = document.getElementById("quesBox");
  const option = document.querySelectorAll(".options");
  // if(index==total){
  //     return endQuiz();
  // }

  //     reset();


  const loadques = () => {

  if(index==total){
      return endQuiz();
  }

      reset();

    const data = questions[index];
    quesBox.innerHTML = `${index + 1})${data.ques}`;
    option[0].nextElementSibling.innerText = data.a;
    option[1].nextElementSibling.innerText = data.b;
    option[2].nextElementSibling.innerText = data.c;
    option[3].nextElementSibling.innerText = data.d;
  }
  const submit = () => {
    const data = questions[index];
    const ans = answer();
    if (ans === data.correct) {
      right++;

    } else {
      wrong++;
    }
    index++;
    loadques();
    return;
  }

  function answer() {
      let answer;
      option.forEach(
          (input) => {
              if (input.checked) {
                  answer= input.value;
              }
          }
      );
      return answer;
  }

  const reset=()=>{
      option.forEach(
          (input) => {
             input.checked=false;
             }
      )
  }
   const endQuiz=()=>{
      document.getElementById("box").innerHTML=`
      <div class="end">
      <h3> Thanks for attempting the QUIZ </h3>
      <h2>${right} / ${total} answers are Correct.</h2>

      </div>
      `
   }
  loadques();