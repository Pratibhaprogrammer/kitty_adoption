
function checkName(userName){
    if (userName == 'Jacob'){
        document.write('<h3>' + 'Welcome Jacob!' + '</h3>');
    } else if (userName != 'Jacob'){
        document.write('<h3>' + 'Hello Gypsy' + '</h3>')
    }

}
checkName(userName);

let catPictures = prompt('select a number');
while (catPictures < 1 || catPictures > 10){
    catPictures = prompt('please select a number between 1 and 10');
}
for(let i = 0; i < catPictures; i++){
   document.write(' <img id="hero" src=https://static.toiimg.com/photo/msid-68523832/68523832.jpg>');
}