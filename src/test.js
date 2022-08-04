// const data = require('./data.json')

// const parse = (table) => {

//   let cle = Object.keys(table);
//   let out = "<ul>"
//   for(let one of cle){
//     if(typeof(table[one])=="object"){
//         // parse(table[one])
//     }else{
//         // console.log(one+" : "+table[one]);
//         out+=`\n<li>${one} : ${table[one]}</li>\n`
//     }
//   }
// return out+="</ul>"
// }

// const tpr = (data)=>{
// let tableKey = []
// let tableValue = []
// let index = Object.keys(data[0])
// for(let item of index){
//     if(typeof(data[0][item] == "object")){
//         // console.log("\n"+item);
//         tableKey.push(item)
//         tableValue.push(parse((data[0][item])));
//     }
//     if(typeof(data[0][item]) == 'number'){
//         tableKey.push(item)
//         tableValue.push((data[0][item]));
//     }
//     if(data[0][item].length){
//         for(let i=0; i<data[0][item].length; i++){
//             tableValue.push(parse(data[0][item][i]))
//         } 
//     }
// }
// setKey(tableKey);
// setValue(tableValue)
// }

// console.log(tableValue);


// const parse = (table: any) => {
//     let cle = Object.keys(table);
//     let out = "<ul>"
//     for(let one of cle){
//       if(typeof(table[one])=="object"){
//           parse(table[one])
//       }else{
//           out+=`<li>${one} : ${table[one]}</li>`
//       }
//     }
//     return out+="</ul>"
  
//   }
// const tpr = (data: any)=>{
//   let index = Object.keys(data[0])
//   let tableKey = []
//   let tableValue = []
//   for(let item of index){
//       if(typeof(data[0][item]) == "number"){
//           tableKey.push(item)
//           tableValue.push(data[0][item])
//       }else{
//           tableKey.push(item)
//           tableValue.push(parse(data[0][item]))
//       }
//   }
  
// setKey(tableKey);
// setValue(tableValue)
// }

let tab;
if( tab == undefined ){
    console.log("ok");
}