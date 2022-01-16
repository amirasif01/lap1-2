// const modal = document.querySelector('#modal');
// const modalHeader = modal.querySelector('h2');
// const modalContent = modal.querySelector('article');
// const modalExit = modal.querySelector('i a');

// const fields = [
//     { tag: 'input', attributes: { type: 'text', name: 'title', placeholder: 'Title' } },
//     { tag: 'input', attributes: { type: 'text', name: 'lead', placeholder: 'lead' } },
//     { tag: 'input', attributes: { type: 'number', year: 'year', placeholder: 'year' } },
//     { tag: 'input', attributes: { type: 'submit', value: 'Add Book' } }
// ]

// async function loadModalFor(movies, id) {
//     modalContent.innerHTML = '';
//     modal.style.display = 'block';
//     if (id === 'new') {
//         renderNewBookForm();
//     } else {
//         const data = await getItem(movies, id);
//         movies === 'movies' ? renderMovieModal(data) : renderAuthorModal(data);
//     }
// }

// function renderMovieModal(movies) {
//     modalHeader.textContent = `${movies.title} - ${movies.year}`;
//     const authorLink = createItemLink(movies.lead);
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete Book';
//     deleteBtn.onclick = () => deleteMovie(movies.id);
//     modalContent.appendChild(moviesLink);
//     modalContent.appendChild(abstract);
//     modalContent.appendChild(deleteBtn);
//     modalExit.href = `#movies`;
// }

// function renderAuthorModal(movies) {
//     modalHeader.textContent = movies.name;
//     const list = document.createElement('ul');
//     const moviesLinks = movies.lead.map(createItemLink);
//     bookLinks.forEach(link => {
//         const li = document.createElement('li');
//         li.appendChild(link);
//         list.appendChild(li);
//     })
//     modalContent.appendChild(list);
//     modalExit.href = `#movies`;
// }

// function renderNewMovieForm(){
//     modalHeader.textContent = 'Add a Movie';
//     const form = document.createElement('form');
//     fields.forEach(f => {
//         const field = document.createElement(f.tag);
//         Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v))
//         form.appendChild(field);
//     })
//     form.onsubmit = postMovie;
//     modalContent.appendChild(form);
//     modalExit.href = `#movies`;
// }

// function createItemLink(data){
//     console.log(data);
//     const link = document.createElement('a');
//     link.href = `#${data.path.substring(1)}`;
//     link.textContent = data.name || data.title;
//     return link;
// }