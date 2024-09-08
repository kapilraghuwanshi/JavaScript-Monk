// primitive data type - store in stack
let name = "Kapil Raghuwanshi";

// non primitive - store Heap
const youtubeObj = {
    name: "Kapil Raghuwanshi",
    startYear: 2023
}

console.log(name);
console.log(youtubeObj);

// copy by value 
let newName = name;
// change the value
newName = "Tech Monk Kapil"

console.log(name);
console.log(newName);

// copy by reference 
const newYoutubeobj = youtubeObj;
newYoutubeobj.name = "Tech Monk Kapil";

console.log(youtubeObj);
console.log(newYoutubeobj);
