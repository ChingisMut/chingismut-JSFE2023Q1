window.onload = function() {
  openMenu();
  closeMenu();
  moveToSection();
  getData();
  getModal();
  getArr();
}
const body = document.body;
const menuBtn = document.querySelector('.header-buttons__wrapper');
const bars = document.querySelectorAll('.bar');
const links = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.menu');
const list = document.querySelector('.our-friends-list');
const next = document.querySelector('.next-1');
const next2 = document.querySelector('.next-2');
const prev = document.querySelector('.prev-1');
const prev2 = document.querySelector('.prev-2');
const numPage = document.querySelector('.number-page');
const modal = document.querySelector('.modal-window');
const background = document.querySelector('.background');

// МЕНЮ
const openMenu = () => {
  menuBtn.addEventListener('click', e => {
      document.querySelector('.nav-list').classList.toggle('nav-list_active');
      menu.classList.toggle('menu_active');
      menuBtn.classList.toggle('header-buttons__wrapper_active');
      body.classList.toggle('noscroll');
      bars.forEach(bar => {
        bar.classList.toggle('bar_active')
      })
  })
}

const moveToSection = () => {
  links.forEach(link => {
    link.addEventListener('click', e => {
      document.querySelector('.nav-list').classList.remove('nav-list_active');
      menu.classList.remove('menu_active');
      menuBtn.classList.remove('header-buttons__wrapper_active');
      body.classList.remove('noscroll');
      bars.forEach(bar => {
        bar.classList.remove('bar_active')
      })
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
      bars.forEach(bar => {
        bar.classList.remove('bar_active')
      })
    }
  })
}

// МОДАЛЬНОЕ ОКНО

let data;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const pages = [];

let arr = [];

let count = 0;

let arrLength = 8;
let pageLength = 6;

const init = () => {
  if(body.clientWidth > 1200) {
  arrLength = 8;
  const page = [];
  page.length = 0;
    while(arr.length < arrLength) {
      let num = getRandomInt(8);
      if(!arr.includes(num)) {
        arr.push(num);
      }
    }
      arr.forEach(e => {
        page.push(e);
      })
    arr.length = 0;
    return page;
  }
  if(body.clientWidth >= 768 && body.clientWidth <= 1200) {
    arrLength = 6;
    const page = [];
    page.length = 0;
      while(arr.length < arrLength) {
        let num = getRandomInt(8);
        if(!arr.includes(num)) {
          arr.push(num);
        }
      }
        arr.forEach(e => {
          page.push(e);
        })
      arr.length = 0;
      return page;
  }
  if(body.clientWidth < 768) {
    arrLength = 3;
    const page = [];
    page.length = 0;
      while(arr.length < arrLength) {
        let num = getRandomInt(8);
        if(!arr.includes(num)) {
          arr.push(num);
        }
      }
        arr.forEach(e => {
          page.push(e);
        })
      arr.length = 0;
      return page;
  }
}

const getArr = () => {
  if(body.clientWidth > 1200) {
  pageLength = 6;
  for(let i = 0; i < pageLength; i++) {
  let number = init();
    pages.push(number)
  }
}
if(body.clientWidth >= 768 && body.clientWidth <= 1200) {
  pageLength = 8;
  for(let i = 0; i < pageLength; i++) {
  let number = init();
    pages.push(number)
  }
}
if(body.clientWidth < 768) {
  pageLength = 16;
  for(let i = 0; i < pageLength; i++) {
  let number = init();
    pages.push(number)
  }
}
}

async function getData() {
  const myData = 'js/data.json';
  const res = await fetch(myData);
  const data = await res.json();
  list.innerHTML = "";

    for(let i = 0; i < pages[count].length; i++) {
    let item =
    `<li class="our-friends-item">
    <img class="our-friends-img" src="${data[pages[count][i]].img}" width="270" height="270" alt="${data[pages[count][i]].type}">
    <p class="our-friends-name">${data[pages[count][i]].name}</p>
    <button class="button button-bordered ${data[pages[count][i]].name}">Learn more</button>
    </li>`
    list.insertAdjacentHTML("beforeend", item);
  }
}

next.addEventListener('click', () => {

  if(count < pageLength - 1) {
    count++;
    list.innerHTML = "";
    getData();
    numPage.innerHTML = '';
    numPage.innerHTML = `${count + 1}`;
    prev.classList.remove('button-bordered_inactive');
    document.querySelector('.prev-1-img').classList.remove('prev-1-img_inactive');
    prev2.classList.remove('button-bordered_inactive');
    document.querySelector('.prev-2-img').classList.remove('prev-2-img_inactive');
  } if(count === pageLength - 1) {
    numPage.innerHTML = '';
    numPage.innerHTML = `${count + 1}`;
    next.classList.add('button-bordered_inactive');
    document.querySelector('.next-1-img').classList.add('next-1-img_inactive');
    next2.classList.add('button-bordered_inactive');
    document.querySelector('.next-2-img').classList.add('next-2-img_inactive');
  }
})

next2.addEventListener('click', () => {
    count = pageLength - 1;
    list.innerHTML = "";
    getData();
    numPage.innerHTML = '';
    numPage.innerHTML = `${count + 1}`;
    next.classList.add('button-bordered_inactive');
    document.querySelector('.next-1-img').classList.add('next-1-img_inactive');
    next2.classList.add('button-bordered_inactive');
    document.querySelector('.next-2-img').classList.add('next-2-img_inactive');

    prev.classList.remove('button-bordered_inactive');
    document.querySelector('.prev-1-img').classList.remove('prev-1-img_inactive');
    prev2.classList.remove('button-bordered_inactive');
    document.querySelector('.prev-2-img').classList.remove('prev-2-img_inactive');
})

prev.addEventListener('click', () => {
  if(count <= pageLength - 1) {
    count--;
    list.innerHTML = "";
    getData();
    numPage.innerHTML = '';
    numPage.innerHTML = `${count + 1}`;
    next.classList.remove('button-bordered_inactive');
    document.querySelector('.next-1-img').classList.remove('next-1-img_inactive');
    next2.classList.remove('button-bordered_inactive');
    document.querySelector('.next-2-img').classList.remove('next-2-img_inactive');
  } if(count === 0) {
    numPage.innerHTML = '';
    numPage.innerHTML = `${count + 1}`;
    next.classList.remove('button-bordered_inactive');
    document.querySelector('.next-1-img').classList.remove('next-1-img_inactive');
    next2.classList.remove('button-bordered_inactive');
    document.querySelector('.next-2-img').classList.remove('next-2-img_inactive');

    prev.classList.add('button-bordered_inactive');
    document.querySelector('.prev-1-img').classList.add('prev-1-img_inactive');
    prev2.classList.add('button-bordered_inactive');
    document.querySelector('.prev-2-img').classList.add('prev-2-img_inactive');
  }
})

prev2.addEventListener('click', () => {
  count = 0;
  list.innerHTML = "";
  getData();
  numPage.innerHTML = '';
  numPage.innerHTML = `${count + 1}`;
  next.classList.remove('button-bordered_inactive');
  document.querySelector('.next-1-img').classList.remove('next-1-img_inactive');
  next2.classList.remove('button-bordered_inactive');
  document.querySelector('.next-2-img').classList.remove('next-2-img_inactive');

  prev.classList.add('button-bordered_inactive');
  document.querySelector('.prev-1-img').classList.add('prev-1-img_inactive');
  prev2.classList.add('button-bordered_inactive');
  document.querySelector('.prev-2-img').classList.add('prev-2-img_inactive');
})

const changedArr = () => {
  pages.length = 0;
  init();
  getArr();
  getData();
  console.log(pages)
}

window.addEventListener('resize', changedArr);

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
      }
      })
      modal.addEventListener('click', e => {
        if(e.target.classList.contains('close')) {
          setTimeout(() => {modal.classList.remove('modal-window_active');},1000)
          document.querySelector('.modal-container').classList.remove('modal-container_active');
          document.querySelector('.close').classList.remove('close_active');
          body.classList.remove('noscroll');
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
