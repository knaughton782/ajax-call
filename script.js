function loadRepo() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      results = JSON.parse(this.responseText);
      for (var i = 0; i < results.length; i++) {
        console.log(results[i].name);

        var ul = document.getElementById("repos");
        var li = document.createElement('li');
        var a = document.createElement('a');

        li.appendChild(document.createTextNode(results[i].name));
        a.appendChild(li);
        a.setAttribute("href", results[i].html_url);
        ul.appendChild(a);
      }
    }
  }

  xhttp.open("GET", "https://api.github.com/users/knaughton782/repos", true)
  xhttp.send();
}






// function loadRepo(url, callback) {
// let output = "";
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//  if (this.readyState == 4 && this.status ==200){
//    JSON.parse(this.responseText).map( repo => output += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);
//    document.getElementById("repositories").innerHTML = output;
// }
// };
// xhttp.open("GET", "https://api.github.com/users/andrewpacheco/repos");
// xhttp.send();
// }


