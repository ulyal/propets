const linkArray = document.querySelectorAll('.js-open-modal');
const overlay = document.querySelector('.js-modal-overlay');
const crossArray = document.querySelectorAll('.js-modal-close');

linkArray.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        const modalName = this.getAttribute('data-modal');
        const modal = document.querySelector('.js-modal[data-modal="'
            + modalName + '"]');
        modal.classList.add('active');
        overlay.classList.add('active');
        document.querySelector('main').classList.add('bluer');
    });
})

crossArray.forEach(function (cross) {
    cross.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelector('main').classList.remove('bluer');
    });
});

document.body.addEventListener('keyup', function (e) {
    const key = e.keyCode;

    if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay.active').classList.remove('active');
        document.querySelector('main').classList.remove('bluer');
    };
}, false);

overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.querySelector('main').classList.remove('bluer');
});

