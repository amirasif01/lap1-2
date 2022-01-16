// const Button = document.getElementById("buttonOne").addEventListener("click", getAll())
// function getAll(){
//     console.log("hello")
//     fetch('http://localhost:3000/movies')
//     .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//         let output = ""
//         data.forEach(movie => {
//             output +=`${movie.name}, ${movie.lead}, ${movie.year} <button onclick="deleteMovie(${movie.id})">Delete</button><br>`
//         });
//         document.getElementById("movies").innerHTML = output;
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });
// }

// async function deleteMovie(id){
//     console.log("delete")
//     try {
//         const options = { method: 'DELETE' }
//         await fetch(`http://localhost:3000/movies/${id}`, options);
//         window.location.hash = `#movies`
//     } catch (err) {
//         console.warn(err);
//     }}

//     getAll()
