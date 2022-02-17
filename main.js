
const llamaNamer = () => {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    const randomizer = Math.floor(Math.random() * 8);

    const namer = () => {                          // internal function that returns the final string, BUT IT HASN'T BEEN CALLED YET! 
        const suffix = " the Llama";
        const name = possibleNames[randomizer];
        return name + suffix;
    }
    return namer();                                // main function calls the internal function and then returns the value the internal function returned.
}

let nameMaker = llamaNamer();
console.log(nameMaker);
