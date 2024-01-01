(function(){
    console.log("Loading user details...");
})();

let name=(fname,sname)=>{
    let n1=greeting()
    function greeting(){
        return "hello " + fname +" " +sname
    }
    return n1
}
let n2=name("Athira","Prasad")
console.log(n2)