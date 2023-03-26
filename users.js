
    let showList = false;
    let showPhone= false;
    let ColorBirth= false;
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
        document.getElementById("mail").innerHTML =  person.email;
        document.getElementById("phone").innerHTML = "Telefono: " +person.phone;
        document.getElementById("cell").innerHTML= "Celular: " +person.cell;
        document.getElementById("address").innerHTML =  "Dir.: " + person.location.street.name +', '+ person.location.street.number;
        document.getElementById("birth").innerHTML = "Nacimiento: " +FormatDay(person.dob.date);
        document.getElementById("age").innerHTML= "Edad: "+person.dob.age;

        document.getElementById("city").innerHTML = "Ciudad: " + person.location.city;
        document.getElementById("state").innerHTML = "Estado: " +person.location.state;
        document.getElementById("country").innerHTML = "Pais: " + person.location.country;
        document.getElementById("postcode").innerHTML = "Codigo postal: " + person.location.postcode;
    }
    function FormatDay(date)
    {
        let indice = date.indexOf("T");
        let extraida = date.substring(0, indice);
        let fecha = new Date(extraida).toLocaleDateString();
        
        return fecha;
    }

    function onClick(){
        if(!showList){
            document.getElementById('list').style.visibility = 'visible';
        }else{
            document.getElementById('list').style.visibility = 'hidden';
        }
        showList = !showList;
    }

    function botonPhone(){
        if(!showPhone){
            document.getElementById('listPH').style.visibility='visible';
        }else{
            document.getElementById('listPH').style.visibility='hidden';
        }
        showPhone = !showPhone;
    }

    function birth(){
        if(!ColorBirth){
            document.getElementById('panel').style.backgroundImage= "url('20013-confeti.jpg')";
            document.getElementById('panel').style.backgroundSize= '100%';
            document.getElementById('boxes').style.backgroundImage= "url('20013-confeti.jpg')";
            document.getElementById('boxes').style.backgroundSize= '100%';
        }else{
            document.getElementById('panel').style.backgroundImage= 'url()';
            document.getElementById('panel').style.backgroundColor='lightblue';
            document.getElementById('boxes').style.backgroundImage= 'url()';
            document.getElementById('boxes').style.backgroundColor='lightblue';
        }
        ColorBirth=!ColorBirth;
    }

    function redireccionar(){
        location.replace('experiencia.html');
    }
    function redireccionarC(){
        location.replace('Cualidades.html');
    }
    function redireccionarEduc(){
        location.replace('Educacion.html');
    }

    function regresar(){
        location.replace('users.html');
    }
