let voiture = {
    chevaux : 4,
    annee : 2024,
    energy : "diesel",
    a: () => console.log(this, this.energy),
    b: function (){
        console.log(this, this.energy)
    }
}

// voiture.a()
// voiture.b()

console.log(voiture.annee);

// destructuring 
let {chevaux, annee} = voiture;
console.log(annee) ;


// voiture.a()
// voiture.b()
