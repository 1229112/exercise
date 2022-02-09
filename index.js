let title = "Titanic";
// console.log(title);
const ip_address = "192.168.0.1/255.255.255.0";
// console.log(ip_address);

let array = [
    title,
    ip_address,
    true
]
// console.log(array.length);

let object = {
    title: "Nedko",
    ip_address: "192.168.1.2/255.255.255.0"
}
console.log(object);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(let element of array){
    console.log(element);
}
let i = 0;
while (i < array.length)  {
    console.log(array[i]);
    i++;
}
function func() {
console.log("Executed the function")
}
func();
const secondFunction = () => {
    console.log("Executed the secondFunction")
}
secondFunction();

