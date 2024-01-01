function calculator(cal){
    n1=cal.replace(/plus/gi,"+")
          .replace(/minus/gi,"-")
          .replace(/multipliedby/gi,"*")
          .replace(/dividedby/gi,"/")
        n2=eval(n1)
        return n2
}
n3="((3plus5minus2)dividedby2)multipliedby4"
n4=calculator(n3)
console.log(n1 ,"=" ,n4)