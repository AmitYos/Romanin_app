
function getRomanianVoice() {
  const voices = window.speechSynthesis.getVoices();
  const roVoices = voices.filter(v => v.lang.startsWith('ro'));
  if (roVoices.length > 0) {
    return roVoices[0];
  } else {
    alert("המערכת לא מצאה קול רומני בדפדפן שלך. כדי לשמוע את המשפטים ברומנית, יש להתקין שפת דיבור רומנית במערכת או לעדכן את הדפדפן.");
    return null;
  }
}

function speakRomanian(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getRomanianVoice();
  if (voice) {
    utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  }
}

function toggleLesson(num) {
  document.querySelectorAll('.section').forEach(div => div.classList.add('hidden'));
  document.getElementById('lesson' + num).classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", () => {
  const l1 = document.getElementById("lesson1");
  l1.innerHTML = `
    <h2>גופים + הפועל 'להיות'</h2>
    <table>
      <tr><th>עברית</th><th>רומנית</th><th>להיות</th></tr>
      <tr><td>אני</td><td>Eu</td><td>sunt</td></tr>
      <tr><td>אתה</td><td>Tu</td><td>ești</td></tr>
      <tr><td>הוא</td><td>El</td><td>este</td></tr>
      <tr><td>היא</td><td>Ea</td><td>este</td></tr>
      <tr><td>אנחנו</td><td>Noi</td><td>suntem</td></tr>
      <tr><td>אתם</td><td>Voi</td><td>sunteți</td></tr>
      <tr><td>הם/הן</td><td>Ei/Ele</td><td>sunt</td></tr>
    </table>

    <h2>משפטים פשוטים</h2>
    <ul>
      <li>Eu sunt Emma. <button onclick="speakRomanian('Eu sunt Emma.')">🔊</button></li>
      <li>Tu ești Michael. <button onclick="speakRomanian('Tu ești Michael.')">🔊</button></li>
      <li>El este Nico. <button onclick="speakRomanian('El este Nico.')">🔊</button></li>
      <li>Noi suntem prieteni. <button onclick="speakRomanian('Noi suntem prieteni.')">🔊</button></li>
    </ul>

    <h2>השלם את המשפט:</h2>
    <div id="quiz1"></div>
    <button onclick="checkQuizAnswers('quiz1')">בדוק</button>

    <h2>אוצר מילים</h2>
    <table>
      <tr><th>עברית</th><th>יחיד</th><th>רבים</th></tr>
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

  const quiz1Data = [
    ["(___) sunt Emma.", "Eu"],
    ["Tu (___) Michael.", "ești"],
    ["El (___) Nico.", "este"],
    ["Noi (___) prieteni.", "suntem"],
    ["(___) este Emma?", "Ea"],
    ["(___) sunt prieteni.", "Ei"],
    ["(___) este prietena mea.", "Ea"],
    ["(___) suntem aici.", "Noi"],
    ["(___) sunt Michael.", "Eu"],
    ["(___) sunteți voi?", "Cine"]
  ];

  const quiz1Div = document.getElementById("quiz1");
  quiz1Data.forEach(([text, answer], i) => {
    const parts = text.split("(___)");
    const select = `<select id="q1_${i}">
      <option value="">בחר</option>
      <option>Eu</option><option>Tu</option><option>El</option>
      <option>Ea</option><option>Noi</option><option>Ei</option>
      <option>suntem</option><option>sunt</option><option>este</option>
      <option>ești</option><option>Cine</option>
    </select>`;
    quiz1Div.innerHTML += `<div>${parts[0]}${select}${parts[1]} <span id="a1_${i}"></span></div>`;
  });

  // Lesson 2 - Colors
  const l2 = document.getElementById("lesson2");
  l2.innerHTML = `
    <h2>צבעים ברומנית</h2>
    <ul>
      <li>Roșu înseamnă אדום. <button onclick="speakRomanian('Roșu înseamnă roșu.')">🔊</button></li>
      <li>Albastru înseamnă כחול. <button onclick="speakRomanian('Albastru înseamnă albastru.')">🔊</button></li>
      <li>Galben înseamnă צהוב. <button onclick="speakRomanian('Galben înseamnă galben.')">🔊</button></li>
      <li>Verde înseamnă ירוק. <button onclick="speakRomanian('Verde înseamnă verde.')">🔊</button></li>
      <li>Negru înseamnă שחור. <button onclick="speakRomanian('Negru înseamnă negru.')">🔊</button></li>
    </ul>
    <h3>אוצר מילים:</h3>
    <table>
      <tr><th>עברית</th><th>רומנית</th></tr>
      <tr><td>אדום</td><td>Roșu</td></tr>
      <tr><td>כחול</td><td>Albastru</td></tr>
      <tr><td>צהוב</td><td>Galben</td></tr>
      <tr><td>ירוק</td><td>Verde</td></tr>
      <tr><td>שחור</td><td>Negru</td></tr>
    </table>
  `;
});

function checkQuizAnswers(prefix) {
  for (let i = 0; i < 10; i++) {
    const userAnswer = document.getElementById(`q1_${i}`).value;
    const correct = ["Eu","ești","este","suntem","Ea","Ei","Ea","Noi","Eu","Cine"][i];
    const result = document.getElementById(`a1_${i}`);
    if (userAnswer === correct) {
      result.textContent = "✔️";
      result.className = "correct";
    } else {
      result.textContent = "❌";
      result.className = "incorrect";
    }
  }
}
