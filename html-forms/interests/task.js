const input = document.querySelectorAll('.interest__check');

console.log(input)

input.forEach((i) => {
    i.addEventListener('click', () => {
        let parent = i.closest('.interest');
        let child = parent.querySelectorAll('.interest__check');

        if (i.checked === true) {
            child.forEach((i) => {
            i.checked = true;
        })
        } else {
            child.forEach((i) => {
            i.checked = false;
        })
        }
    })
})