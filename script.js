const inputContent = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
   if (inputContent.value !== '') {
      let li = document.createElement('li');
      li.innerHTML = inputContent.value;
      listContainer.appendChild(li);

      let span = document.createElement('span');
      span.innerHTML = '\u00d7'
      li.appendChild(span);
   } else {
      alert('you have to type somthing')
   }
   inputContent.value = '';
   savaData();
}

listContainer.addEventListener('click', (e) => {
   if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      savaData();
   } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      savaData();
   }
}, false);

function savaData() {
   localStorage.setItem('data', listContainer.innerHTML)
}

function loadData() {
   listContainer.innerHTML = localStorage.getItem('data');
}
loadData();