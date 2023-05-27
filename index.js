const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnPlayText = document.getElementById('btnPlayText');
const texto = document.getElementById('texto');

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase;
};

recognition.onend = (event) => {
    console.log('El micrófono deja de escuchar');
};

recognition.onerror = (event) => {
    console.log(event.error);
};

btnStart.addEventListener('click', () => {
    recognition.start();
});

btnStop.addEventListener('click', () => {
    leerTexto(texto.value);
});

btnPlayText.addEventListener('click', () => {
    recognition.abort();
});

function leerTexto(texto) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
