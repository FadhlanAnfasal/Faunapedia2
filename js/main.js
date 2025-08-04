// Daftar soal dan jawaban
const questions = [
  {
    question: "Hewan apa yang dikenal sebagai raja hutan?",
    choices: ["Harimau", "Singa", "Serigala", "Macan tutul"],
    answer: "Singa"
  },
  {
    question: "Hewan mamalia yang bisa terbang adalah?",
    choices: ["Burung", "Kelelawar", "Capung", "Kupu-kupu"],
    answer: "Kelelawar"
  },
  {
    question: "Hewan tercepat di darat adalah?",
    choices: ["Kuda", "Macan Tutul", "Cheetah", "Rusa"],
    answer: "Cheetah"
  }
];

// Elemen-elemen HTML
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;

// Fungsi menampilkan soal
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  // Bersihkan pilihan sebelumnya
  choicesEl.innerHTML = "";
  resultEl.textContent = "";

  // Buat tombol pilihan
  currentQuestion.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => checkAnswer(choice);
    button.style.display = "block";
    button.style.margin = "5px 0";
    choicesEl.appendChild(button);
  });
}

// Fungsi cek jawaban
function checkAnswer(choice) {
  const correct = questions[currentQuestionIndex].answer;
  if (choice === correct) {
    resultEl.textContent = "Benar!";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = `Salah! Jawaban yang benar: ${correct}`;
    resultEl.style.color = "red";
  }
}

// Fungsi ke pertanyaan selanjutnya
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Kuis selesai!";
    choicesEl.innerHTML = "";
    resultEl.textContent = "";
    nextBtn.style.display = "none";
  }
}

// Tombol "Pertanyaan Selanjutnya"
nextBtn.addEventListener("click", nextQuestion);

// Mulai kuis
showQuestion();
