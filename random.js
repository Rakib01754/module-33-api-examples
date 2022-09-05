const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(users => displayUsers(users.results))
}
const displayUsers = (users) => {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = '';
    users.map(user => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <img src="${user.picture.large}" alt="">
        <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>Country : ${user.location.country}</p>`
        userContainer.appendChild(newDiv);

    })

}