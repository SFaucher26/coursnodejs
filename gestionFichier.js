const fs = require("fs");

// if(!fs.existsSync('monDossier') ){
//     fs.mkdir('./monDossier', (Error)=>{
//         if(Error){
//             console.log(Error);
//         }else {
//             console.log('dossier correctement créé');
//         }
//     })
// }else{
//     fs.rmdir('./monDossier', (Error) =>{
//         if(Error){
//             console.log(Error);
//         }else{
//             console.log('dossier supprimé');
//         }
//     })
// }

// fs.access('./monDossier') (err){
// if(err){
//     fs.mkdir('./monDossier', (Error)=>{
//         if(Error){
//             console.log(Error);
//         }else{
//             console.log('dossier correctement créé');
//         }
//     })

// }else{
//     fs.rmdir('./monDossier', (Error) =>{
//         if(Error){
//             console.log(Error);
//         }else{
//             console.log('dossier supprimé');
//         }
//     })
// }
// }
const makeFile = () => {
  fs.writeFile(
    "./monDossier/monFichier.txt",
    "ce fichier est écrit avec node.js",
    (err) => (err ? console.log(err) : console.log("fichier correctement créé"))
  );
};

const createDir = () =>
  fs.mkdir("./monDossier", (Error) =>
    Error ? console.log(Error) : makeFile()
  );
fs.access("./monDossier", (err) => err && createDir());

// fs.access('./monDossier', (err) =>{
// if(err){
//     fs.mkdir('./monDossier', (Error)=>{
//         fs.writeFile('./monDossier/monFichier.txt', 'Ce fichier est écrit avecc node.js',
//         (Error) => {
//             if(Error){
//                 console.log(Error);
//             }else{
//                 console.log('fichier correctement créé');
//             }
//         }
//         )
//     })
// }
// })
