// load modules

const inquirer = require('inquirer');
const fs = require('fs');

// create HTML generated input using inquired answers

const generateHTML = ({name, location, hobbies, stack, github, linkedin }) =>
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}. In my spare time I enjoy ${hobbies}</p>
      <p class="lead">I am proficient in ${stack}</p>
      <h3><span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>
`

// create user inputted questions using inquirer

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type:'input',
            message: 'Where are you from?',
            name:'location',
        },
        {
            type:'input',
            message: 'What are your hobbies?',
            name:'hobbies',
        },
        {
            type: 'input',
            message: 'What programming languages do you know?',
            name:'stack',
        },
        {
            type:'input',
            message: 'Enter your GitHub username: ',
            name:'github',
        },
        {
            type:'input',
            message: 'Enter your linkedin URL: ',
            name:'linkedin',
        },
    ])
    // user input is stored into objects and then retrieved and displayed 
    // in an HTML file
    .then((response)=>{
    const htmlPage = generateHTML(response);
    fs.writeFile('index.HTML', htmlPage, (err)=>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
    });