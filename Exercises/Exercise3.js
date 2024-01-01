var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
  ]
  for(let i=0;i<data.length;i++){
    let obj=data[i]
    fname=obj.firstname.trim()
    sname=obj.lastname.trim()
    fullname=fname+" "+sname
    console.log("Name:",fullname);
    if(obj.phone.length<10){
        let zeroes=10-obj.phone.length
        for(let i=0;i<zeroes;i++){
             obj.phone ="0"+obj.phone   
        }
        console.log("phone:",obj.phone)
    }
    else if(obj.phone.length>10){
        let no=obj.phone.slice(0,10)
        console.log("phone:",no)
    }
    else{
        console.log("phone:",obj.phone)
    }
    let zipp=obj.zip.split(" ").join("")
    console.log("zip:",zipp)
    if(obj.age>0 && obj.age<150){
        console.log("Age:",obj.age)
    }
    else{
        console.log("Age: NA")
    }
    id=obj.id.trim()
    res="###"+obj.id.slice(3)
    console.log("id:",res)

  }