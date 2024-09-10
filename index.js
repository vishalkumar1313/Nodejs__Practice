const { json } = require("express");
const fs=require("fs");
const bioData={
    name:"Vishal",
    age:21,
    College:"Chitkara University",
};
//Json is used when data is sent from server to our web page ...
//For converting String to Json we use Stringify
const jsonData=JSON.stringify(bioData);
console.log(jsonData);

//For converting Json to Object we use Parse
// const objData=JSON.parse(jsonData);
// console.log(objData);

fs.writeFile("json2.json",jsonData,
    (err)=>{console.log("Created json file");
    });

fs.readFile("json1.json","utf-8",(err,data)=>{
    const orignalData=JSON.parse(data);
    console.log(orignalData);
});    

