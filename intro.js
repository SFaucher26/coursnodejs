// const {eleves, cours} = require("./formation");

// console.log(cours);

// const system = require('fs')
// console.log(system);

// throw new Error('il y a une nouvelle erreur');

// https://wwww.maif.fr/assurance

// protocol : https://
// domaine : 13.107.246.42
// port : 3000
// ressource : /assurance => end point

const http = require("http");

const server = http.createServer((Request, Response) => {
  Response.setHeader("content-type", "text/html");
  Response.write('<head><meta charset="UTF-8"></head>');

  if (
    (Request.url === "/" || Request.url === "/home") &&
    Request.method === "GET"
  ) {
    Response.write("<h1>Vous êtes sur la page d'accueil</h1>");
  } else if (Request.url === "/profil" && Request.method === "GET") {
    Response.write("<h1>Vous êtes sur la page profil<h1>");
  } else if (Request.url === "/contact" && Request.method === "GET") {
    Response.write("<h1> Vous êtes sur la page contact<h1>");
  } else {
    Response.write("<h1> 404 page non valide <h1>");
  }
  Response.end();
});

server.listen(8080, "localhost", () => {
  console.log("server is listening on port https://localhost:8080");
});

// switch (req.url) {
//     case '/':
//     case '/home':
//        console.log('Vous êtes sur la home page');
//         break;
//     case '/formation':
//        console.log('Vous êtes en formation chez Simplon');
//         break;
//     case '/entreprise':
//        console.log('Vous êtes à la Maif');
//         break;
//     case '/maison':
//        console.log('Vous êtes en pyjama');
//         break;
//     default:
//        console.log('404 dans les choux');
//         break;
// }
