const sounds = ['intro1', 'intro2', 'intro3', 'intro4', 'intro5']

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', function () {
        stopSongs();
        document.getElementById(sound).play();
    });
    document.body.appendChild(btn);
});


function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })

}