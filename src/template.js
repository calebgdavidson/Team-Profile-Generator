const renderTeam = team => {
const renderManager = manager => {
return `<div class="roleCard">
<div class="card employee-card p-3 m-2">
    <div class="card-header cardTitleColor text-white">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title">${manager.getRole()}</h3>
    </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        </ul>
        </div>
    </div>
</div>`;}
  
const renderEngineer = engineer => {
return `<div class="roleCard">
<div class="card employee-card p-3 m-2">
    <div class="card-header cardTitleColor text-white">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        </ul>
        </div>
    </div>
</div>`;}
  
const renderIntern = intern => {
return `<div class="roleCard">
<div class="card employee-card p-3 m-2">
    <div class="card-header cardTitleColor text-white">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title">${intern.getRole()}</h3>
    </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        </ul>
        </div>
    </div>
</div>`;}
  
const html = [];
html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager)));
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
    .join(""));
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
    .join(""));
return html.join("");}
  
module.exports = team => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
<title>team profile generator</title>
</head>
      
<body>
<div class="bg-color">
    <div class="text-center text-white">
    <h1>my team</h1>
    </div>
</div>
      
<div class="container">
    <div class="row p-3">
        <div class="justify-content-center">
        ${renderTeam(team)}
         </div>
    </div>
</div>    
</body>
</html>

<style>
.bg-color {
background-color: blue;
}
    
.cardTitleColor {
background-color: red;
}
    
.roleCard{
width: 33%;
}
    
@media screen {
.roleCard{
width: 100%;
}}
</style>
`;}