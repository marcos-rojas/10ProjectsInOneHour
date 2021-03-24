const btn_open = document.getElementById("btn-open");
const btn_close = document.getElementById("btn-close");
const container = document.getElementById("container");
const nav = document.getElementById("nav");

btn_open.addEventListener('click',function(){
    container.classList.add('active');
});

btn_close.addEventListener('click',function(){
    container.classList.remove('active');
});
