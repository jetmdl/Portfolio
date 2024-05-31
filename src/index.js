//import modules here 
import './style.css';
import createTemplate from './createTemplate';
// import gitIcon from './github-mark.png';
// import linkedIcon from './iconmonstr-linkedin-3.svg';
import gitIcon from './github.png';
import linkedIcon from './linkedin.png';
import cvIcon from './cv.png';
import profile from './IMG_3036.jpg';
import wpms from './wpms.png';
import pdf from './2024_CV_Generic.pdf';

createTemplate();

document.querySelector('#gitButtonContainer').addEventListener('click', function() {
    location.href = 'https://github.com/jetmdl'
}, false);

document.querySelector('#contactGitContainer').addEventListener('click', function() {
    location.href = 'https://github.com/jetmdl'
}, false);

document.querySelector('#linkedinButtonContainer').addEventListener('click', function() {
    location.href = 'https://www.linkedin.com/in/james-tarrant-3925b02a5/'
}, false);

document.querySelector('#contactLinkedContainer').addEventListener('click', function() {
    location.href = 'https://www.linkedin.com/in/james-tarrant-3925b02a5/'
}, false);

document.querySelector('#CVButtonContainer').addEventListener('click', function() {
    window.open('./2024_CV_Generic.pdf');
}, false);

document.querySelector('#contactCVContainer').addEventListener('click', function() {
    window.open('./2024_CV_Generic.pdf');
}, false);

