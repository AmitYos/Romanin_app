let lessonVisible = false;

function toggleLesson(num) {
  lessonVisible = !lessonVisible;
  const lessonContent = document.getElementById('lesson-content');
  lessonContent.innerHTML = lessonVisible ? getLessonContent(num) : '';
}

function playAudio(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ro-RO';
  speechSynthesis.speak(utterance);
}

function getLessonContent(num) {
  if (num === 1) {
    return `
      <h2>שיעור 1: היכרות</h2>
      <h3>גופים אישיים + הפועל "to be"</h3>
      <table>
        <tr><th>עברית</th><th>רומנית</th><th>To be</th></tr>
        <tr><td>אני</td><td>Eu</td><td>sunt</td></tr>
        <tr><td>אתה/את</td><td>Tu</td><td>ești</td></tr>
        <tr><td>הוא</td><td>El</td><td>este</td></tr>
        <tr><td>היא</td><td>Ea</td><td>este</td></tr>
        <tr><td>אנחנו</td><td>Noi</td><td>suntem</td></tr>
        <tr><td>אתם/אתן</td><td>Voi</td><td>sunteți</td></tr>
        <tr><td>הם</td><td>Ei</td><td>sunt</td></tr>
        <tr><td>הן</td><td>Ele</td><td>sunt</td></tr>
      </table>

      <h3>משפטים פשוטים:</h3>
      <ul>
        <li><button class="audio-btn" onclick="playAudio('Salut')">🔊</button>שלום! – Salut!</li>
        <li><button class="audio-btn" onclick="playAudio('Eu sunt Emma')">🔊</button>אני אמה. – Eu sunt Emma.</li>
        <li><button class="audio-btn" onclick="playAudio('El este Michael')">🔊</button>הוא מייקל. – El este Michael.</li>
        <li><button class="audio-btn" onclick="playAudio('El este Nico')">🔊</button>הוא ניקו. – El este Nico.</li>
        <li><button class="audio-btn" onclick="playAudio('Noi suntem prieteni')">🔊</button>אנחנו חברים. – Noi suntem prieteni.</li>
        <li><button class="audio-btn" onclick="playAudio('Da, tu ești Michael')">🔊</button>כן, אתה מייקל. – Da, tu ești Michael.</li>
        <li><button class="audio-btn" onclick="playAudio('Nu, eu sunt Nico')">🔊</button>לא, אני ניקו. – Nu, eu sunt Nico.</li>
      </table>

      <h3>השלם את המשפט:</h3>
      <ul id="quiz" class="ltr">
        ${generateQuiz()}
      </table>
      <button onclick="checkAnswers()">בדוק תשובות</button>

      <h3>אוצר מילים:</h3>
      <table><tr><th>עברית</th><th>יחיד</th><th>רבים</th></tr>
        <tr><td>שלום</td><td>Salut</td><td>–</td></tr>
        <tr><td>אני</td><td>Eu</td><td>–</td></tr>
        <tr><td>להיות (אני)</td><td>sunt</td><td>–</td></tr>
        <tr><td>הוא</td><td>El</td><td>–</td></tr>
        <tr><td>להיות (הוא/היא)</td><td>este</td><td>–</td></tr>
        <tr><td>אנחנו</td><td>Noi</td><td>–</td></tr>
        <tr><td>להיות (אנחנו)</td><td>suntem</td><td>–</td></tr>
        <tr><td>חבר</td><td>prieten</td><td>prieteni</td></tr>
        <tr><td>לא</td><td>Nu</td><td>–</td></tr>
        <tr><td>כן</td><td>Da</td><td>–</td></tr>
      </table>
    `;
  }
  return '';
}

function generateQuiz() {
  const questions = [
    { text: "(___) sunt Emma.", answer: "Eu", options: ["Eu", "El", "Ea"] },
    { text: "El (___) Nico.", answer: "este", options: ["sunt", "este", "ești"] },
    { text: "Noi (___) prieteni.", answer: "suntem", options: ["suntem", "sunt", "este"] },
    { text: "(___) ești Michael.", answer: "Tu", options: ["Tu", "El", "Ea"] },
    { text: "(___) suntem prieteni.", answer: "Noi", options: ["Noi", "Voi", "Ei"] },
    { text: "El (___) Emma?", answer: "este", options: ["este", "ești", "suntem"] },
    { text: "(___) sunt Michael.", answer: "Eu", options: ["Eu", "El", "Noi"] },
    { text: "(___) este El?", answer: "Cine", options: ["Cine", "Tu", "Noi"] },
    { text: "(___) sunteți voi?", answer: "Cine", options: ["Cine", "El", "Noi"] },
    { text: "(___) este prietenul meu.", answer: "El", options: ["El", "Ea", "Eu"] }
  ];

  return questions.map((q, i) => `
    <li>
      ${q.text}
      <select data-answer="${q.answer}">
        <option value="">בחר</option>
        ${q.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
      </select>
    </li>
  `).join('');
}

function checkAnswers() {
  const quiz = document.querySelectorAll('#quiz li');
  quiz.forEach((item) => {
    const select = item.querySelector('select');
    const correct = select.dataset.answer;
    const existing = item.querySelector('span');
    if (existing) existing.remove();
    const result = document.createElement('span');
    if (select.value === correct) {
      result.textContent = ' ✔️';
      result.className = 'correct';
    } else {
      result.textContent = ' ✖️';
      result.className = 'incorrect';
    }
    item.appendChild(result);
  });
}
