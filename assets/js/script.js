let notes = document.querySelectorAll('.note');
notes.forEach(note => {
  note.addEventListener('click', () => playSound(note.id));
});

function playSound(note) {
    let audioElement = document.querySelector(`#s_${note}`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    };
};