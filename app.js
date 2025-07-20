
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

// Mock of lesson data with TTS-enabled sentences for simplicity
document.addEventListener("DOMContentLoaded", () => {
  const sentences = [
    "Eu sunt Emma.",
    "Tu ești Michael.",
    "El este Nico.",
    "Noi suntem prieteni."
  ];

  const container = document.getElementById("lesson");
  sentences.forEach(sentence => {
    const p = document.createElement("p");
    p.textContent = sentence;

    const btn = document.createElement("button");
    btn.textContent = "🔊";
    btn.onclick = () => speakRomanian(sentence);

    container.appendChild(p);
    container.appendChild(btn);
  });
});
