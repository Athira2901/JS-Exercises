var flag=true
function validateglsegments(config,segments){
    for(let i in config){
        
        if(config[i].type== "REQUIRED") 
            
            if(segments[i]!= ""  && i.length>=segments[i].length){
                flag=true
                
            }
        
            else{
                flag=false
                return
            }
        }
}


const GLConfig = {
    "CO": { type: "REQUIRED"},
    "MAJ": { type: "NORMAL"},
    "SET": { type: "NORMAL"},
    "MIN": { type: "REQUIRED"}
  }
const GLSegments = {
    "CO" : "81",
    "MAJ": "11",
    "SET": "111",
    "MIN": "1"
  }
 validateglsegments(GLConfig ,GLSegments)
 if(flag==true){
    console.log("passed")
 }
 else{
    console.log("failed")
 }
  