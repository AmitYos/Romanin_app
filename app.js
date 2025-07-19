let lessonVisible = false;

function toggleLesson(num) {
  lessonVisible = !lessonVisible;
  const lessonContent = document.getElementById('lesson-content');
  lessonContent.innerHTML = lessonVisible ? getLessonContent(num) : '';
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
        <li>שלום! – Salut!</li>
        <li>אני אמה. – Eu sunt Emma.</li>
        <li>הוא מייקל. – El este Michael.</li>
        <li>היא ניקו. – Ea este Nico.</li>
        <li>אנחנו חברים. – Noi suntem prieteni.</li>
        <li>כן, אתה מייקל. – Da, tu ești Michael.</li>
        <li>לא, אני ניקו. – Nu, eu sunt Nico.</li>
      </ul>

      <h3>השלם את המשפט:</h3>
      <ul id="quiz" class="ltr">
        <li>
          (___) sunt Emma.
          <select>
            <option value="">בחר</option>
            <option value="Eu">Eu</option>
            <option value="El">El</option>
            <option value="Ea">Ea</option>
          </select>
        </li>
        <li>
          Ea (___) Nico.
          <select>
            <option value="">בחר</option>
            <option value="sunt">sunt</option>
            <option value="este">este</option>
            <option value="ești">ești</option>
          </select>
        </li>
        <li>
          Noi (___) prieteni.
          <select>
            <option value="">בחר</option>
            <option value="suntem">suntem</option>
            <option value="sunt">sunt</option>
            <option value="este">este</option>
          </select>
        </li>
      </ul>
      <button onclick="checkAnswers()">בדוק תשובות</button>
    `;
  }
  return '';
}

function checkAnswers() {
  const quiz = document.querySelectorAll('#quiz li');
  const answers = ['Eu', 'este', 'suntem'];

  quiz.forEach((item, index) => {
    const select = item.querySelector('select');
    const existing = item.querySelector('span');
    if (existing) existing.remove();

    const result = document.createElement('span');
    if (select.value === answers[index]) {
      result.textContent = ' ✔️';
      result.className = 'correct';
    } else {
      result.textContent = ' ✖️';
      result.className = 'incorrect';
    }
    item.appendChild(result);
  });
}
