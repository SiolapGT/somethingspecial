const messages = [
    "Yang benerr?",
    "Eh beneran ini??",
    "Dhirrr?",
    "Dhir please...",
    "Coba pikirin ulang dehh!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}
function handleNooClick() {
    window.location.href = "NO.html";
}
function handleYesClick() {
    window.location.href = "YESSS.html";
}
function envelopeClick(){
    window.location.href = "envelope.html";
}
