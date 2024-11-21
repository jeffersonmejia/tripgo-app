// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos del menú
    const menuItems = document.querySelectorAll('.menu-item');

    // Agrega un evento 'click' a cada elemento del menú
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Elimina la clase 'active' de todos los elementos
            menuItems.forEach(menu => menu.classList.remove('active'));

            // Agrega la clase 'active' al elemento seleccionado
            item.classList.add('active');
        });
    });

    // Verificación adicional: elimina duplicados de 'search-box'
    // Esto asegura que no se generen cuadros de búsqueda adicionales accidentalmente
    const searchBoxes = document.querySelectorAll('.search-box');
    if (searchBoxes.length > 1) {
        for (let i = 1; i < searchBoxes.length; i++) {
            searchBoxes[i].remove(); // Elimina los duplicados dejando solo el primero
        }
    }
});
// Esperar 20 segundos antes de mostrar el chat
setTimeout(() => {
    const chatBox = document.getElementById('chat-box');
    chatBox.classList.remove('chat-hidden');
    chatBox.classList.add('chat-visible');
}, 5000); // 20,000 milisegundos

// Cerrar el chat al hacer clic en el botón "X"
document.getElementById('close-chat').addEventListener('click', () => {
    const chatBox = document.getElementById('chat-box');
    chatBox.classList.remove('chat-visible');
    chatBox.classList.add('chat-hidden');
});
// Evento al hacer clic en el botón de enviar
document.getElementById('send-btn').addEventListener('click', () => {
    const chatBody = document.getElementById('chat-body');
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message) {
        // Crear el nuevo mensaje
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message', 'user-message');
        newMessage.innerHTML = `<p>${message}</p><span class="chat-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>`;
        chatBody.appendChild(newMessage);

        // Limpiar el input
        input.value = '';
        chatBody.scrollTop = chatBody.scrollHeight; // Desplazar hacia abajo
    }
});


