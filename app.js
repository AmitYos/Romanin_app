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
      <h3>גופים אישיים</h3>
      <ul>
        <li><b>אני</b> – Eu</li>
        <li><b>אתה</b> – Tu (זכר)</li>
        <li><b>את</b> – Tu (נקבה)</li>
        <li><b>הוא</b> – El</li>
        <li><b>היא</b> – Ea</li>
        <li><b>אנחנו</b> – Noi</li>
        <li><b>אתם</b> – Voi (זכר/מעורב)</li>
        <li><b>אתן</b> – Voi (נקבה)</li>
        <li><b>הם</b> – Ei</li>
        <li><b>הן</b> – Ele</li>
      </ul>

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
      <ul id="quiz">
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
