let obj = {id:111, name:'sumit', salary:20000}
console.log(obj.id);
obj.id=1001
console.log(obj.id);
obj['type']='sample';
console.log(obj);

//deleting
delete obj.type;
console.log(obj);

//object methods


let emmp = {
    id:1111,
    name:'sumit',
    phone:12132123,
    age:27,
    salary:20000

};
//1.Object.keys
const keys=Object.keys(emmp);
//returns keys in arrry
console.log(keys);

//2.Object.values
const values=Object.values(emmp);
//returns values
console.log(values);

//object.entries
const entries=Object.entries(emmp);
console.log(entries);