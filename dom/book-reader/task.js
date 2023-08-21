const btn = document.querySelectorAll('.font-size') 
btn.forEach((e) => {
    e.addEventListener('click', (el) => {
        el.preventDefault();
        const book = document.querySelector('.book');
        btn.forEach(e => e.classList.remove('font-size_active'));
        e.classList.add('font-size_active');
        if (e.classList.contains('font-size_small')){
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (e.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-small','book_fs-big');
        }
    })
})
