const c = console;
const ord = ["l", "h", "e", "m", "m", "e", "l", "i", "g", "m", "m", "m", "l"];
function CheckLetter(array, wantedLetter) {
    let positions = [];
    for (let letter in array) {
        if (array[letter] == wantedLetter) {
            positions = [...positions, letter];
        }
        ;
    }
    if (positions.length != 0) {
        const f = new Intl.ListFormat("en-us");
        return f.format(positions);
    }
    else {
        return "not found";
    }
}
c.log(`index of "l" is ${CheckLetter(ord, "l")}`);
c.log(`index of "e" is ${CheckLetter(ord, "e")}`);
c.log(`index of "m" is ${CheckLetter(ord, "m")}`);
c.log(`index of "ø" is ${CheckLetter(ord, "ø")}`);