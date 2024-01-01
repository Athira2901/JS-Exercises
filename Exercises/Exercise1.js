let array = ['apple','banana','mango']
for(let i=0;i<array.length;i++){
    console.log(array[i])
}
let array1 = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]
for(let i=0;i<array1.length;i++){
    obj=array1[i]
    for (let x in obj){
        console.log(obj[x])
    }

}
let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}
for(let i in object){
    console.log(object[i])
}

