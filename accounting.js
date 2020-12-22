document.getElementById('submit').onclick = function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = {name, email, password};
    fetch('https://propets-app.herokuapp.com/account/en/v1/registration', {
        method: 'POST',
        body: user
    })
        .then(response => response.json())
            .then(result  => alert(JSON.stringify(result, null, 2)));

}
