const para = document.createElement('p');
para.textContent = 'Hey I am red!';
para.style.color = 'red';
document.body.append(para);

const heading = document.createElement('h3');
heading.textContent = 'I am a blue h3!';
heading.style.color = 'blue';
document.body.append(heading);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = 'I am in a div';
div.append(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
div.append(p);

document.body.append(div);


