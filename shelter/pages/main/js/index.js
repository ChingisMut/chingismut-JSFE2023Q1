window.onload = function() {
  openMenu();
  closeMenu();
  moveToSection();
  getData();
  init();
  getModal();
}
const body = document.body;
const menuBtn = document.querySelector('.header-buttons__wrapper');
const bars = document.querySelectorAll('.bar');
const links = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.menu');
const list = document.querySelector('.our-friends-list');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const nextImg = document.querySelector('.next-img');
const modal = document.querySelector('.modal-window');
const background = document.querySelector('.background');

// МЕНЮ
const openMenu = () => {
  menuBtn.addEventListener('click', e => {
      document.querySelector('.nav-list').classList.toggle('nav-list_active');
      menu.classList.toggle('menu_active');
      menuBtn.classList.toggle('header-buttons__wrapper_active');
      body.classList.toggle('noscroll');
  })
}

const moveToSection = () => {
  links.forEach(link => {
    link.addEventListener('click', e => {
      document.querySelector('.nav-list').classList.remove('nav-list_active');
      menu.classList.remove('menu_active');
      menuBtn.classList.remove('header-buttons__wrapper_active');
      body.classList.remove('noscroll');
    })
  })
}

const closeMenu = () => {
  menu.addEventListener('click', e => {
    if(e.target.classList.contains('menu_active')) {
      document.querySelector('.nav-list').classList.remove('nav-list_active');
      menu.classList.remove('menu_active');
      menuBtn.classList.remove('header-buttons__wrapper_active');
      body.classList.remove('noscroll');
    }
  })
}

// СЛАЙДЕР

const pastArr = [];
const currArr = [];
const nextArr = [];

let data;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function getData() {
  const myData = 'js/data.json';
  const res = await fetch(myData);
  const data = await res.json();
  list.innerHTML = "";
  for(let i = 0; i < pastArr.length; i++) {
    let item =
    `<li class="our-friends-item">
    <img class="our-friends-img" src="${data[pastArr[i]].img}" width="270" height="270" alt="${data[pastArr[i]].type}">
    <p class="our-friends-name">${data[pastArr[i]].name}</p>
    <button class="button button-bordered ${data[currArr[i]].name}">Learn more</button>
    </li>`
    list.insertAdjacentHTML("beforeend", item);
  }

  for(let i = 0; i < currArr.length; i++) {
    let item =
    `<li class="our-friends-item">
    <img class="our-friends-img" src="${data[currArr[i]].img}" width="270" height="270" alt="${data[currArr[i]].type}">
    <p class="our-friends-name">${data[currArr[i]].name}</p>
    <button class="button button-bordered ${data[currArr[i]].name}">Learn more</button>
    </li>`
    list.insertAdjacentHTML("beforeend", item);
  }

  for(let i = 0; i < nextArr.length; i++) {
    let item =
    `<li class="our-friends-item">
    <img class="our-friends-img" src="${data[nextArr[i]].img}" width="270" height="270" alt="${data[nextArr[i]].type}">
    <p class="our-friends-name">${data[nextArr[i]].name}</p>
    <button class="button button-bordered ${data[currArr[i]].name}">Learn more</button>
    </li>`
    list.insertAdjacentHTML("beforeend", item);
  }
}

const init = () => {
  if(body.clientWidth > 1200) {
  while(nextArr.length < 3) {
      let num = getRandomInt(8);
      if(!nextArr.includes(num)) {
        nextArr.push(num);
      }
  }
  nextArr.forEach(e => {
    currArr.push(e);
  })
  nextArr.length = 0;
  while(nextArr.length < 3) {
    let num = getRandomInt(8);
    if(!currArr.includes(num) && !nextArr.includes(num)) {
      nextArr.push(num);
    }
  }
  currArr.forEach(e => {
    pastArr.push(e);
  })
  currArr.length = 0;
  nextArr.forEach(e => {
    currArr.push(e);
  })
  nextArr.length = 0;
  while(nextArr.length < 3) {
    let num = getRandomInt(8);
    if(!currArr.includes(num) && !nextArr.includes(num)) {
      nextArr.push(num);
    }
  }}
  if(body.clientWidth >= 768 && body.clientWidth <= 1200) {
    while(nextArr.length < 2) {
      let num = getRandomInt(8);
      if(!nextArr.includes(num)) {
        nextArr.push(num);
      }
  }
  nextArr.forEach(e => {
    currArr.push(e);
  })
  nextArr.length = 0;
  while(nextArr.length < 2) {
    let num = getRandomInt(8);
    if(!currArr.includes(num) && !nextArr.includes(num)) {
      nextArr.push(num);
    }
  }
  currArr.forEach(e => {
    pastArr.push(e);
  })
  currArr.length = 0;
  nextArr.forEach(e => {
    currArr.push(e);
  })
  nextArr.length = 0;
  while(nextArr.length < 2) {
    let num = getRandomInt(8);
    if(!currArr.includes(num) && !nextArr.includes(num)) {
      nextArr.push(num);
    }
  }}
  if(body.clientWidth < 768) {
    while(nextArr.length < 1) {
      let num = getRandomInt(8);
      if(!nextArr.includes(num)) {
        nextArr.push(num);
      }
  }
  nextArr.forEach(e => {
    currArr.push(e);
  })
  nextArr.length = 0;
  while(nextArr.length < 1) {
    let num = getRandomInt(8);
    if(!currArr.includes(num) && !nextArr.includes(num)) {
      nextArr.push(num);
    }
  }
  currArr.forEach(e => {
    pastArr.push(e);
  })
  currArr.length = 0;
  nextArr.forEach(e => {
    currArr.push(e);
  })
  nextArr.length = 0;
  while(nextArr.length < 1) {
    let num = getRandomInt(8);
    if(!currArr.includes(num) && !nextArr.includes(num)) {
      nextArr.push(num);
    }
  }}
}
console.log(pastArr,currArr,nextArr)

const forward = () => {
  pastArr.length = 0;
  currArr.forEach(e => {
    pastArr.push(e);
  })
  currArr.length = 0;
  nextArr.forEach(e => {
    currArr.push(e);
  })
  nextArr.length = 0;
  if(body.clientWidth > 1200) {
    while(nextArr.length < 3) {
      let num = getRandomInt(8);
      if(!currArr.includes(num) && !nextArr.includes(num)) {
        nextArr.push(num);
      }
    }}
  if(body.clientWidth >= 768 && body.clientWidth <= 1200) {
    while(nextArr.length < 2) {
    let num = getRandomInt(8);
    if(!currArr.includes(num) && !nextArr.includes(num)) {
      nextArr.push(num);
      }
  }}
  if(body.clientWidth < 768) {
    while(nextArr.length < 1) {
    let num = getRandomInt(8);
      if(!currArr.includes(num) && !nextArr.includes(num)) {
        nextArr.push(num);
      }
  }}
}

const backward = () => {
  nextArr.length = 0;
  currArr.forEach(e => {
    nextArr.push(e);
  })
  currArr.length = 0;
  pastArr.forEach(e => {
    currArr.push(e);
  })
  pastArr.length = 0;
  if(body.clientWidth > 1200) {
    while(pastArr.length < 3) {
      let num = getRandomInt(8);
      if(!currArr.includes(num) && !pastArr.includes(num)) {
        pastArr.push(num);
      }
  }}
  if(body.clientWidth >= 768 && body.clientWidth <= 1200) {
    while(pastArr.length < 2) {
      let num = getRandomInt(8);
      if(!currArr.includes(num) && !pastArr.includes(num)) {
        pastArr.push(num);
      }
  }}
  if(body.clientWidth < 768) {
    while(pastArr.length < 1) {
      let num = getRandomInt(8);
      if(!currArr.includes(num) && !pastArr.includes(num)) {
        pastArr.push(num);
      }
  }}
}

const moveRight = () => {
  forward();
  list.classList.add('transition-right');
  next.removeEventListener('click', moveRight);
  prev.removeEventListener('click', moveLeft);
}

next.addEventListener('click', moveRight);

const moveLeft = () => {
  backward();
  list.classList.add('transition-left');
  prev.removeEventListener('click', moveLeft);
  next.removeEventListener('click', moveRight);
}

prev.addEventListener('click', moveLeft);

list.addEventListener('animationend', (animationEvent) => {
  getData();
  list.classList.remove('transition-left');
  list.classList.remove('transition-right');
  next.addEventListener('click', moveRight);
  prev.addEventListener('click', moveLeft);
})

const changedArr = () => {
  pastArr.length = 0;
  currArr.length = 0;
  nextArr.length = 0;
  init();
  getData();
}

window.addEventListener('resize', changedArr);

// МОДАЛЬНОЕ ОКНО

async function getModal() {
      const myData = 'js/data.json';
      const res = await fetch(myData);
      const data = await res.json();
      list.addEventListener('click', e => {
        modal.innerHTML = "";
        if(e.target.classList.contains('button')) {
          for(let i = 0; i < data.length; i++) {
            if(data[i].name === e.target.classList[2]) {
              let modalBlock =
            `<div class="modal-container">
              <div class="modal">
                <img class="modal-img" src="${data[i].img}" width="500" height="500" alt="${data[i].type}">
                <div class="modal-block">
                  <h2 class="modal-title">${data[i].name}</h2>
                  <h3 class="modal-subtitle">${data[i].type} - ${data[i].breed}</h3>
                  <h4 class="modal-desc">${data[i].description}</h4>
                  <ul class="modal-list">
                    <li class="modal-item"><span>Age:</span> &nbsp;${data[i].age}</li>
                    <li class="modal-item"><span>Inoculations:</span> &nbsp;${data[i].inoculations}</li>
                    <li class="modal-item"><span>Diseases:</span> &nbsp;${data[i].diseases}</li>
                    <li class="modal-item"><span>Parasites:</span> &nbsp;${data[i].parasites}</li>
                  </ul>
                </div>
              </div>
              </div>
            <button class="close close-bordered">
                <div class="close-img"></div>
              </button>`
              modal.insertAdjacentHTML("beforeend", modalBlock);
            }
          }
          modal.classList.add('modal-window_active');
          setTimeout(() => {
            document.querySelector('.modal-container').classList.add('modal-container_active');
            document.querySelector('.close').classList.add('close_active')},700)
          // body.classList.add('noscroll');
          if(body.clientWidth > 1200) {
            window.scrollTo(0,1496);
          }
          if(body.clientWidth >= 768 && body.clientWidth <= 1200) {
            window.scrollTo(0,2300);
          }
          if(body.clientWidth < 768) {
          window.scrollTo(0,1820);
          }
      }
      })
      modal.addEventListener('click', e => {
        if(e.target.classList.contains('close')) {
          setTimeout(() => {modal.classList.remove('modal-window_active');},1000)
          document.querySelector('.modal-container').classList.remove('modal-container_active');
          document.querySelector('.close').classList.remove('close_active');
          // body.classList.remove('noscroll');
        }
        if(e.target.classList.contains('close-img')) {
          setTimeout(() => {modal.classList.remove('modal-window_active');},1000)
          document.querySelector('.modal-container').classList.remove('modal-container_active');
          document.querySelector('.close').classList.remove('close_active');
          // body.classList.remove('noscroll');
        }
      })
      modal.addEventListener('click', e => {
        if(e.target.classList.contains('modal-window_active')) {
          setTimeout(() => {modal.classList.remove('modal-window_active');},1000)
          document.querySelector('.modal-container').classList.remove('modal-container_active');
          document.querySelector('.close').classList.remove('close_active')
          // body.classList.remove('noscroll');
        }
      })
}
