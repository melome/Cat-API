function myFunction() {
  let img = document.querySelector(".card-img-top")
  let p = document.querySelector(".card-text")

  fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif') //fetching data from TheCatAPI
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Sorry, Try again'); //Error Message
          return;
        }
        response.json().then(function (data) {
          console.log(data)
          img.setAttribute('src', data[0].url) // Random cat pic from API 
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });

  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Sorry, Try again');
          return;
        }
        response.json().then(function (fact) {
          console.log(fact)
          p.innerHTML = fact.text
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}