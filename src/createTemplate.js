export default function createTemplate(){

    //Create and append top menu bar 
    const menuBar = document.createElement('div');
    menuBar.id = 'menuBar';
    document.querySelector('.content').appendChild(menuBar);

    //Create and append icon container in menu bar 
    const menuIconContainer = document.createElement('div');
    menuIconContainer.id = 'menuIconContainer';
    document.querySelector('#menuBar').appendChild(menuIconContainer);

    //Create and append button container and button divs in menu bar 
    const menuButtonContainer = document.createElement('div');
    menuButtonContainer.id = 'menuButtonContainer';
    document.querySelector('#menuBar').appendChild(menuButtonContainer);

    const menuHomeButton = document.createElement('div');
    menuHomeButton.id = 'menuHomeButton';
    menuHomeButton.innerHTML = 'Home';
    menuHomeButton.className = 'menuButton';
    document.querySelector('#menuButtonContainer').appendChild(menuHomeButton);

    const menuMenuButton = document.createElement('div');
    menuMenuButton.id = 'menuMenuButton';
    menuMenuButton.innerHTML = 'Menu';
    menuMenuButton.className = 'menuButton';
    document.querySelector('#menuButtonContainer').appendChild(menuMenuButton);

    const menuContactButton = document.createElement('div');
    menuContactButton.id = 'menuContactButton';
    menuContactButton.innerHTML = 'Contact';
    menuContactButton.className = 'menuButton';
    document.querySelector('#menuButtonContainer').appendChild(menuContactButton);

    //Create and append the flex container that holds the center content and padding divs 
    const flexContainer = document.createElement('div');
    flexContainer.id = 'flexContainer';
    document.querySelector('#content').appendChild(flexContainer);

    //Create top section container
    const topSection = document.createElement('div');
    topSection.id = 'topSection';
    document.querySelector('#flexContainer').appendChild(topSection);

    //Create middle content container 
    const midSection = document.createElement('div'); 
    midSection.id = ' midSection';
    document.querySelector('#flexContainer').appendChild(midSection);

    //Create bottom content container
    const botSection = document.createElement('div');
    botSection.id = 'botSection';
    document.querySelector('#flexContainer').appendChild(botSection);
}