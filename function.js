// console.log('Hello');
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
        isFavorite: false
    }
]; 

// function domStringMaker(animalArray)
// {
//     var stringToPrint = '<h1>';
//     for(var i = 0; i < animalArray.length; i++)
//     {
//     stringToPrint += animalArray[i].petName + '<br>';
//     }
//     stringToPrint += '</h1>';
//     return stringToPrint;
// }

// var message = domStringMaker(instructorPets);

// function printToDOM(stringToPrint,divID)
// {
//     document.getElementById(divID).innerHTML = stringToPrint;
// }

// printToDOM(message,'petname');

//or




function domStringMaker(animalArray)
{
    for(var i = 0; i< animalArray.length; i++)
    {
        var animalString = "";
        if(animalArray[i].isFavorite)
        {
            animalString += '<div class="pet isFavorite">';
        }
        else
        {
            animalString += '<div class="pet isNotFavorite">';
        }
        animalString +=  '<h1>' + animalArray[i].petName + '</h1>';
        animalString +=  '<h2> Owner: ' + animalArray[i].instructorName + '</h2>';
        animalString +=  '<h3> Type: ' + animalArray[i].animalType + '</h3>';
        animalString += '</div>';


        // var animalString = "<h1>" + animalArray[i].petName + '</h1>';
        printToDom(animalString,"petname");
    }
}

function printToDom(stringToPrint,divID)
{
    var myDiv = document.getElementById(divID);
    myDiv.innerHTML += stringToPrint;
}

domStringMaker(instructorPets);