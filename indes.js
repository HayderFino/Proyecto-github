// index.js - JS sencillo que agrega UI y un contador de clics
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') || document.body;

    const container = document.createElement('div');
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.maxWidth = '600px';
    container.style.margin = '20px';
    container.innerHTML = `
        <h1>Hola</h1>
        <p id="msg">Este es un ejemplo de JS sencillo.</p>
    `;

    const btn = document.createElement('button');
    btn.textContent = 'Hazme clic';
    btn.style.padding = '8px 12px';
    btn.style.marginTop = '8px';

    const counter = document.createElement('span');
    counter.textContent = ' 0';
    counter.style.marginLeft = '10px';
    let count = 0;

    btn.addEventListener('click', () => {
        count += 1;
        counter.textContent = ` ${count}`;
        const msg = document.getElementById('msg');
        msg.textContent = `Has hecho clic ${count} vez${count === 1 ? '' : 'es'}.`;
    });

    container.appendChild(btn);
    container.appendChild(counter);
    app.appendChild(container);
});