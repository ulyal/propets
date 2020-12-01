const linkArray = document.querySelectorAll('.js-open-modal');
const main = document.querySelector('main');
const crossArray = document.querySelectorAll('.js-modal-close');

linkArray.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.js-modal').classList.add('active');
        main.classList.add('bluer');
    });
})

crossArray.forEach(function (cross) {
    cross.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.classList.remove('active');
        main.classList.remove('bluer');
    });
});

document.body.addEventListener('keyup', function (e) {
    const key = e.keyCode;
    if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        main.classList.remove('bluer');
    }
    ;
}, false);

//authorization-nav
// const linkAuthorization = document.querySelector('js-authorization');
//
// linkAuthorization.addEventListener('click', function (event){
//     event.preventDefault();
//     document.querySelector('authorization-table').classList.add('active');
// });

