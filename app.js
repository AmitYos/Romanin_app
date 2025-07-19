function loadLesson(num) {
  const lessonContent = document.getElementById('lesson-content');
  if (num === 1) {
    lessonContent.innerHTML = `
      <h2>שיעור 1: היכרות</h2>
      <h3>5 מילים חדשות</h3>
      <ul>
        <li><b>שלום</b> – Salut (סאלוט)</li>
        <li><b>אני</b> – Eu (אֵאוּ)</li>
        <li><b>אתה/את</b> – Tu (טוּ)</li>
        <li><b>כן</b> – Da (דה)</li>
        <li><b>לא</b> – Nu (נוּ)</li>
      </ul>
      <h3>משפטים פשוטים:</h3>
      <ul>
        <li>שלום! – Salut!</li>
        <li>אני אניש. – Eu sunt Anish.</li>
        <li>אתה יוסי? – Tu ești Yossi?</li>
        <li>כן, אני יוסי. – Da, eu sunt Yossi.</li>
        <li>לא, אני דני. – Nu, eu sunt Dani.</li>
      </ul>
    `;
  }
}