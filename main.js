const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames=['/images/pic1.jpg','/images/pic2.jpg','/images/pic3.jpg','/images/pic4.jpg','/images/pic5.jpg'];

/* Declaring the alternative text for each image file */

const altText=['pic1.jpg not loaded','pic2.jpg not loaded','pic3.jpg not loaded','pic4.jpg not loaded','pic5.jpg not loaded'];

/* Looping through images */
let i=0;
while(i<fileNames.length){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    i++;
    newImage.addEventListener('click',()=>{
        displayedImage.setAttribute('src',newImage.getAttribute('src'));
        displayedImage.setAttribute('alt',newImage.getAttribute('alt'));
    });

}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',()=>{

    const name=btn.getAttribute('class');
    if(name=='dark'){
      btn.setAttribute('class','light');
      btn.textContent='Lighten';
      overlay.style.backgroundColor="rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent='Darken';
        overlay.style.backgroundColor="rgba(0,0,0,0)";
    }
})

