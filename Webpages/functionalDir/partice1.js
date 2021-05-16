const animals = [
    { name: 'Milo', type: 'cat', eyes: 2 },
    { name: 'Peluza', type: 'cat', eyes: 2 },
    { name: 'Yummy', type: 'cat', eyes: 2 },
    { name: 'Doggy', type: 'dog', eyes: 2 },
    { name: 'Sammy', type: 'dog', eyes: 2 }
];
const higherOrderFunctionsModule = (function () {

    const init = function () {
        //Get all animals (map)
        console.log('---');
        console.log('all animals (map)');
        console.log(getAnimals);
        //Get all animals (forEach)
        console.log('---');
        console.log('all animals (forEach)');
        console.log(getAnimals2);
        //Get only dogs
        console.log('---');
        console.log('only dogs');
        console.log(dogs);
        //Get only sammy
        console.log('---');
        console.log('only one item');
        console.log(sammy);
        //Get all the names together
        console.log('---');
        console.log('fusionAnimals');
        console.log(fusionedAnimals);
        //Check if some of the animals are cats
        console.log('---');
        console.log('check if there are cats');
        console.log(thereAreCats);
        //Check if all the items are dogs
        console.log('---');
        console.log('check if ALL are dogs');
        console.log(areAllDogs);
        //Get all dogs and fusion them
        console.log('---');
        console.log('Merge the dogs and fusion them');
        console.log(getDogsAndFusionThem);
    }
})
const getAnimals=animals.map(animals=>'${animal.name} is ${animal.type}')
const getAnimals=animals.forEach('${animals.name} is a ${animals.type}')

const dogs=animals.filter(animal=>animal.type === 'dog')
const sammy=animals.find(animal=>animal.name==='Sammy')
const fusionedAnimals=animals.reduce((newName,animal)=> newName+animal.name,'')
const thereAreCats= animals.some(animal=>animal.type==='cat')
const areAllDogs=animals.every(animals=>animals.type==='dog');
const getDogsAndFusionThem=animals.filter(animal=>animals.type==='dog').reduce((newName,animal)=>newName+animal.name,' ');