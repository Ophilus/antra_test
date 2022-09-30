function getUsers() {
    fetch('https://randomuser.me/api/?results=1')
      .then((results) => {
        return results.json();
      })
      .then((data) => {
          createArtic(data.results[0]);
      });
  }
  
  createArtic = (randomUser) => {
    let main = document.getElementById('main');
    let art = document.createElement('article');
    let info = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let phone = document.createElement('span');
    let button = document.createElement('button');
    img.setAttribute('src', randomUser.picture.medium);
    name.textContent =
      'name: ' + randomUser.name.title + ' ' + randomUser.name.last;
    email.textContent = 'email: ' + randomUser.email;
    phone.textContent = 'phone: ' + randomUser.phone;
    button.textContent = 'Show Birthday date';
    button.addEventListener('click', function handleClick() {
        const text = 'Show Birthday date'
        if(button.textContent.includes(text)){
            button.textContent='Birthday: ' + randomUser.dob.date;
            button.setAttribute('id', 'hidden');
        }else{
            button.textContent = text;
            button.setAttribute('id', '');
        }
        
    })

  
    art.appendChild(img);
    info.appendChild(name);
    info.appendChild(email);
    info.appendChild(phone);
    info.appendChild(button);
    art.appendChild(info);
    main.appendChild(art);
  };
  document.getElementById('reload').addEventListener('click', function handleClick() {
    document.getElementById('main').innerHTML = "";
    for(let i= 0; i < 20;i++){
        getUsers();
    }
})
for(let i= 0; i < 20;i++){
    getUsers();
}
  


  