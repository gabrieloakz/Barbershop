document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.container').classList.remove('hidden');
        document.querySelector('.header').classList.remove('hidden');
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('.footer').classList.remove('hidden');
    }, 500);
});