const obj = {
    key1: 3,
    key2: 2
}
//obj[toString(key1)] = 10;
//Object.assign(obj, {key3 : 4});
/* Object.entries(obj).forEach(i => {
    console.log(typeof i[1]);
    //Object.assign(obj, {obj[toString]});
}); 
 */
Object.keys(obj).forEach(i => {
    let value = obj[i];
    console.log(i);
    console.log(value);
    Object.assign(obj, {value : i});
});

console.log(Object.entries(obj));
