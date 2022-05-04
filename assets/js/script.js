// singlePage
const click = document.querySelectorAll('.nav li');
const section = document.querySelectorAll('section');

section[0].classList.add('ativo');

function activePage(index) {
  section.forEach((item) => {
    item.classList.remove('ativo');
  });
  section[index].classList.add('ativo');
};

click[0].classList.add('ativo');

function activeTab(index) {
  click.forEach((item) => {
    item.classList.remove('ativo');
  });
  click[index].classList.add('ativo');
};

click.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeTab(index);
    activePage(index);
  });
});

// darkmode
const darkmode = document.getElementById("click");

darkmode.addEventListener('click', () => {
  darkmode.classList.toggle('fa-sun');
});

darkmode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
})


// tooltip
const tecnologias = document.querySelectorAll('.tecnologias-container i');
const tooltip = document.querySelectorAll('.tooltip');

function showToolTip(index) {
  tooltip.forEach((item) => {
    item.classList.remove('ativo');
  });
  tooltip[index].classList.toggle('ativo');
};

tecnologias.forEach((item, index) => {
  item.addEventListener('click', () => {
    showToolTip(index);
  });
});