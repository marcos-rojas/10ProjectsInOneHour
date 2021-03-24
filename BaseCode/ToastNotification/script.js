const btn = document.getElementById("btn");
const container = document.getElementById("container");

function createNotification() {

    //adding child elements to a container
    const notif = document.createElement('div');
    //we add the class to the element we've created
    notif.classList.add('toast');
    //value is shown
    notif.innerText = "This CHALLENGE IS CRAZY";
    container.appendChild(notif);
    //deliting element that we've created because a listener
    setTimeout(function () {
        notif.remove();
    }, 3000);
}
btn.addEventListener('click', function () {
    createNotification();
});

