const toDo = () => {

  const toDoForm = document.querySelector('.to-do__form');
  const toDoInput = document.querySelector('.to-do__input');
  const toDoList = document.querySelector('.to-do__list');
  const toDoCompleted = document.querySelector('.to-do__completed');
  const toDoBtn = document.querySelector('.to-do__btn');
  const toDoInner = document.querySelector('.to-do__inner');

  let toDoData = JSON.parse(localStorage.getItem('text')) || [];


  toDoBtn.addEventListener('click', () => {
    toDoBtn.classList.toggle('to-do__btn--none')
    toDoInner.classList.toggle('to-do__inner--none')
  });

  const render = () => {

    toDoList.innerHTML = '';
    toDoCompleted.innerHTML = '';

    toDoData.forEach((item, index) => {
      const li = document.createElement('li');
      li.classList.add('to-do__item');
      li.innerHTML = '<span class="to-do__text">' + item.text + '</span>' +
        '<div class="to-do__buttons">' +
        '<button class="to-do__remove"></button>' +
        '<button class = "to-do__complete"></button>' +
        '</div>';

      if (item.completed) {
        toDoCompleted.append(li)
      } else {
        toDoList.append(li)
      };

      li.querySelector('.to-do__complete').addEventListener('click', (e) => {
        item.completed = !item.completed;
        localStorage.setItem('text', JSON.stringify(toDoData));
        render();
      })

      li.querySelector('.to-do__remove').addEventListener('click', (e) => {
        toDoData.splice(index, 1);
        localStorage.removeItem('text', JSON.stringify(toDoData));
        render();
      })
    })
  }

  toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newToDo = {
      text: toDoInput.value,
      completed: false
    }
    if (toDoInput.value.trim() === '') {
      toDoInput.value = '';
    } else {
      toDoData.push(newToDo);
      localStorage.setItem('text', JSON.stringify(toDoData));
      toDoInput.value = '';
    }
    render();
  })

  document.addEventListener('DOMContentLoaded', () => {
    const newToDo = {
      text: toDoInput.value,
      completed: false
    }
    if (toDoInput.value.trim() === '') {
      toDoInput.value = '';
    } else {
      toDoData.push(newToDo);
      localStorage.setItem('text', JSON.stringify(toDoData));
      toDoInput.value = '';
    }
    render();
  });
}

export default toDo