const obj ={
    name:"prat",
    age:21,
    address:"Nagpur"

}

const jsondata = JSON.stringify(obj);
console.log(jsondata);


const objdata = JSON.parse(jsondata);
console.log(objdata);