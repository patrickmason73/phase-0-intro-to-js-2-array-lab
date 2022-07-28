const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
    cats.push('Ralph');
};
function destructivelyPrependCat() {
    cats.unshift('Bob');
};
function destructivelyRemoveLastCat() {
    cats.pop(); 
};
function destructivelyRemoveFirstCat() {
    cats.shift();
};
function appendCat(){
    const newcats = ["Milo", "Otis", "Garfield", "Broom"]
    return newcats;
};
function prependCat() {
   const newcats = ['Arnold', ...cats];
   return newcats;
};
function removeLastCat() {
    const newCats = cats.slice(0, 2)
    return newCats;
}
function removeFirstCat() {
    const newCats = cats.slice(1)
    return newCats
}