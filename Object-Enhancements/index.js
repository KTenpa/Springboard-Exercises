/* Write an ES2015 Version */

// Same keys and values
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//Computed property names
let favoriteNumber = 42;

const instructor1 = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object methods
let instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

//createAnimal function
function createAnimal (species, verb, noise) {
    return {
        species,
        [verb](){
            return noise;
        }
    }
}