
function toggleLesson(num) {
  const el = document.getElementById("lesson" + num);
  el.classList.toggle("hidden");
}

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

window.onload = function () {
  const l4 = document.getElementById("lesson4");
  l4.innerHTML = `
<h2>שיעור 4: מספרים ברומנית</h2>
<ul>
  <li>Am un măr. (יש לי תפוח אחד) <button onclick="speakRomanian('Am un măr.')">🔊</button></li>
  <li>Ai doi frați. (יש לך שני אחים) <button onclick="speakRomanian('Ai doi frați.')">🔊</button></li>
  <li>El are trei cărți. (יש לו שלושה ספרים) <button onclick="speakRomanian('El are trei cărți.')">🔊</button></li>
  <li>Noi avem patru scaune. (יש לנו ארבעה כיסאות) <button onclick="speakRomanian('Noi avem patru scaune.')">🔊</button></li>
  <li>Ei au cinci pixuri. (יש להם חמישה עטים) <button onclick="speakRomanian('Ei au cinci pixuri.')">🔊</button></li>
</ul>

<h3>אוצר מילים:</h3>
<table>
  <tr><th>עברית</th><th>רומנית</th></tr>
  <tr><td>אחד</td><td>unu / un</td></tr>
  <tr><td>שתיים</td><td>doi / două</td></tr>
  <tr><td>שלוש</td><td>trei</td></tr>
  <tr><td>ארבע</td><td>patru</td></tr>
  <tr><td>חמש</td><td>cinci</td></tr>
  <tr><td>תפוח</td><td>măr</td></tr>
  <tr><td>אח</td><td>frate / frați</td></tr>
  <tr><td>ספר</td><td>carte / cărți</td></tr>
  <tr><td>כיסא</td><td>scaun / scaune</td></tr>
  <tr><td>עט</td><td>pix / pixuri</td></tr>
</table>
`;
  document.getElementById("lesson1").innerHTML = `
    <h2>שיעור 1: היכרות</h2>
    <p>Eu sunt Emma. <button onclick="speakRomanian('Eu sunt Emma.')">🔊</button></p>
    <p>Tu ești Michael. <button onclick="speakRomanian('Tu ești Michael.')">🔊</button></p>
    <p>El este Nico. <button onclick="speakRomanian('El este Nico.')">🔊</button></p>
    <p>Noi suntem prieteni. <button onclick="speakRomanian('Noi suntem prieteni.')">🔊</button></p>
    <h3>אוצר מילים:</h3>
    <table><tr><th>עברית</th><th>יחיד</th><th>רבים</th></tr>
      <tr><td>אני</td><td>Eu</td><td>-</td></tr>
      <tr><td>להיות</td><td>sunt</td><td>suntem</td></tr>
      <tr><td>הוא</td><td>El</td><td>-</td></tr>
      <tr><td>חבר</td><td>prieten</td><td>prieteni</td></tr>
      <tr><td>שלום</td><td>Salut</td><td>-</td></tr>
      <tr><td>כן</td><td>Da</td><td>-</td></tr>
      <tr><td>לא</td><td>Nu</td><td>-</td></tr>
    </table>
  `;

  document.getElementById("lesson2").innerHTML = `
    <h2>שיעור 2: צבעים</h2>
    <p>Cartea este albastră. <button onclick="speakRomanian('Cartea este albastră.')">🔊</button></p>
    <p>Mărul este roșu. <button onclick="speakRomanian('Mărul este roșu.')">🔊</button></p>
    <p>Floarea este galbenă. <button onclick="speakRomanian('Floarea este galbenă.')">🔊</button></p>
    <p>Haina este verde. <button onclick="speakRomanian('Haina este verde.')">🔊</button></p>
    <h3>אוצר מילים:</h3>
    <table><tr><th>עברית</th><th>יחיד</th><th>רבים</th></tr>
      <tr><td>כחול</td><td>albastru / albastră</td><td>albaștri / albastre</td></tr>
      <tr><td>אדום</td><td>roșu / roșie</td><td>roșii</td></tr>
      <tr><td>צהוב</td><td>galben / galbenă</td><td>galbeni / galbene</td></tr>
      <tr><td>ירוק</td><td>verde</td><td>verzi</td></tr>
    </table>
  `;

  document.getElementById("lesson3").innerHTML = `
    <h2>שיעור 3: המטבח</h2>
    <ul>
      <li>Bucătăria este curată. (המטבח נקי) <button onclick="speakRomanian('Bucătăria este curată.')">🔊</button></li>
      <li>Farfuria este pe masă. (הצלחת על השולחן) <button onclick="speakRomanian('Farfuria este pe masă.')">🔊</button></li>
      <li>Canile sunt în dulap. (הספלים בארון) <button onclick="speakRomanian('Canile sunt în dulap.')">🔊</button></li>
      <li>Frigiderul este plin. (המקרר מלא) <button onclick="speakRomanian('Frigiderul este plin.')">🔊</button></li>
      <li>Lingura este murdară. (הכף מלוכלכת) <button onclick="speakRomanian('Lingura este murdară.')">🔊</button></li>
    </ul>
    <h3>אוצר מילים:</h3>
    <table>
      <tr><th>עברית</th><th>יחיד</th><th>רבים</th></tr>
      <tr><td>מטבח</td><td>Bucătărie</td><td>Bucătării</td></tr>
      <tr><td>צלחת</td><td>Farfurie</td><td>Farfurii</td></tr>
      <tr><td>כוס</td><td>Cană</td><td>Cani</td></tr>
      <tr><td>מקרר</td><td>Frigider</td><td>Frigidere</td></tr>
      <tr><td>כף</td><td>Lingură</td><td>Linguri</td></tr>
      <tr><td>שולחן</td><td>Masă</td><td>Mese</td></tr>
      <tr><td>ארון</td><td>Dulap</td><td>Dulapuri</td></tr>
      <tr><td>נקי</td><td>Curat / Curată</td><td>-</td></tr>
      <tr><td>מלוכלך</td><td>Murdar / Murdară</td><td>-</td></tr>
      <tr><td>מלא</td><td>Plin / Plină</td><td>-</td></tr>
    </table>
  `;
};
