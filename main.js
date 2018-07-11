// function getfile(file,callback){
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState === 4 && xhr.status =="200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
// getfile("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
// })
function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then (response=>{
    if(response.ok){
      resolve(response.json());
    }
    else {
      reject(new Error('error'));
    }
  })
})
}
var newFile=loadJSON("data.json");
newFile.then(data=>{
console.log(data);
career(data.career);
education(data.education);
skills(data.skills);
achievments(data.achievments);
})

var childtwo=document.querySelector(".childtwo");

function career(careerObj){
var careerHeading=document.createElement("h1");
careerHeading.textContent="Career Objective";
childtwo.appendChild(careerHeading);
var hr=document.createElement("hr");
childtwo.appendChild(hr);
var careerP=document.createElement("p");
careerP.textContent=careerObj.info;
childtwo.appendChild(careerP);
var hr=document.createElement("hr");
childtwo.appendChild(hr);
}
function education(edu){
  var educationHeading=document.createElement("h1");
  educationHeading.textContent="Education";
  childtwo.appendChild(educationHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  for(var i=0;i<edu.length;i++)
  {
    eduH3=document.createElement("h1");
    eduH3.textContent=edu[i].degree;
    childtwo.appendChild(eduH3);
  var eduUl=document.createElement("ul");
  var eduLi=document.createElement("li");
  eduLi.textContent=edu[i].institute;
  eduUl.appendChild(eduLi);
  childtwo.appendChild(eduUl);
  var eduUi=document.createElement("ui");
  var eduLi=document.createElement("li");
  eduLi.textContent=edu[i].data;
  eduUi.appendChild(eduLi);
  childtwo.appendChild(eduUi);

}
var hr=document.createElement("hr");
childtwo.appendChild(hr);
}
function skills(ski){
  var skillHeading=document.createElement("h1");
  skillHeading.textContent="Technical Skills";
  childtwo.appendChild(skillHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  var skillTable=document.createElement("table");
  skillTable.border="1";
  childtwo.appendChild(skillTable);
  var tableData="";
  for(var i=0;i<ski.length;i++){
    tableData+="<tr><td>"+ski[i].title+"</td><td>"+ski[i].info+"</td></tr>";
  }
skillTable.innerHTML=tableData;
var hr=document.createElement("hr");
childtwo.appendChild(hr);
}
function achievments(ach){
  var achievHeading=document.createElement("h1");
  achievHeading.textContent=" Achievments";
  childtwo.appendChild(achievHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  for(var i=0;i<ach.length;i++){
    var achUl=document.createElement("ul");
    var achLi=document.createElement("li");
    achLi.textContent=ach[i].info;
    achUl.appendChild(achLi);
    childtwo.appendChild(achUl);
  }
}
