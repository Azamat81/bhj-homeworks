const editor = document.getElementById('editor');

editor.addEventListener('input', saveTxt);
window.addEventListener('load', txtLocalStorage);

function saveTxt() {
    localStorage.text = editor.value;
}

function txtLocalStorage() {
    if (localStorage.text) {
        editor.value = localStorage.text;
    }
}