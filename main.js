var favAnimal = {
    name:"zoe",
    ainimal:"cat"
};

// console.log("favAnimal:", favAnimal.ainimal);


var instructorPets = 
[
    {
        instructorName: "Zeo",
        petName: "Whiskey",
        animalType: "cat",
        isFavorite: true
    },
    {
        instructorName: "Lauren",
        petName: "Frankie",
        animalType: "dog",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Wiley",
        animalType: "dog",
        isFavorite: true
    }
];

// console.log(instructorPets[0].instructorName);
var output = '<h1>';
for(var i = 0; i < instructorPets.length; i++)
{
    output += instructorPets[i].petName + '<br>';
}

output += '</h1>';
document.getElementById('petname').innerHTML = output;

//or
var petDiv = document.getElementById("petname");
for(var i = 0; i < instructorPets.length; i++)
{
    petDiv.innerHTML += '<h1>' + instructorPets[i].petName + '</h1>';
}