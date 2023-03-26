const ul = document.getElementById('authors');

    fetch('https://randomuser.me/api/')
    .then((resp) => resp.json())
    .then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    persons = author;
    showPerson(persons);
  })
    })
    .catch(function(error) {
  console.log(error);
    });


    function showPerson(person)
    {
        document.getElementById("src").src = person.picture.large;
        document.getElementById("nameC").innerHTML =  person.name.first +' '+ person.name.last;
    }

    function regresar(){
        location.replace('users.html');
    }