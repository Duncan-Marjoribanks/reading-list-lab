document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');

const handleSubmit = function(event) {
  event.preventDefault();

  const title = this.querySelector('#title');
  const author = this.querySelector('#author');
  const category = this.querySelector('#category');

  const titleText = title.value;
  const authorText = author.value;
  const categorySelection = category.value;

  const newRecord = document.createElement('p');
  const recordString = `${titleText} by ${authorText} is a ${categorySelection}.`;
  newRecord.textContent = recordString;

  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newRecord);

  form.reset();
}

form.addEventListener('submit', handleSubmit);


//-----------------------------------------------

const deleteButton = document.querySelector('#delete-all');

const handleClick = function(event) {
    const readingList = document.querySelector('#reading-list');
    while (readingList.firstChild) {
      readingList.removeChild(readingList.firstChild);
    }
}


deleteButton.addEventListener('click', handleClick);






})
