function onClick(e) {
  e.preventDefault();

  let value = document.getElementById("selector").value;
  console.log(value);

  const url = "https://api.chucknorris.io/jokes/random";
  //?category=" + value;

      var http = new XMLHttpRequest();
      var response = http.responseText;;

      response = JSON.parse(response);
      http.open ("GET", url, true);
      http.send();
      http.onreadystatechange = document.getElementById('joke').innerHTML = "<h1>" + response.value.joke + "</h1>";




};

document.getElementById('Go').addEventListener('click', onClick);
