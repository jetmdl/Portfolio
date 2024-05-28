export default function createTemplate(){
    const blurb =   `I'm an aspiring web developer based in Carmarthenshire, 
                    South Wales. After more than ten years working in CAD/CAM programming, 
                    and production automation in the extrusion die industry, I am now beginning 
                    a new journey in web development. I have experience in HTML, CSS, JavaScript, 
                    Webpack, and Git.`;

    //Create and append top menu bar 
    const menuBar = document.createElement('div');
    menuBar.id = 'menuBar';
    document.querySelector('.content').appendChild(menuBar);

    //Create and append button container and button divs in menu bar 
    const menuButtonContainer = document.createElement('div');
    menuButtonContainer.id = 'menuButtonContainer';
    document.querySelector('#menuBar').appendChild(menuButtonContainer);

    const gitButtonContainer = document.createElement('div');
    gitButtonContainer.id = 'gitButtonContainer';
    gitButtonContainer.className = 'menuButton';
    document.querySelector('#menuButtonContainer').appendChild(gitButtonContainer);

        const linkedinButtonContainer = document.createElement('div');
        linkedinButtonContainer.id = 'linkedinButtonContainer';
        linkedinButtonContainer.className = 'menuButton';
        document.querySelector('#menuButtonContainer').appendChild(linkedinButtonContainer);

        const CVButtonContainer = document.createElement('div');
        CVButtonContainer.id = 'CVButtonContainer';
        CVButtonContainer.className = 'menuButton';
        document.querySelector('#menuButtonContainer').appendChild(CVButtonContainer);

        const menuContactButton = document.createElement('div');
        menuContactButton.id = 'menuContactButton';
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

        const profileBlurbContainer = document.createElement('div');
        profileBlurbContainer.id = 'profileBlurbContainer';
        document.querySelector('#topSection').appendChild(profileBlurbContainer);

            const profileBlurbTitle = document.createElement('div');
            profileBlurbTitle.id = 'profileBlurbTitle';
            document.querySelector('#profileBlurbContainer').appendChild(profileBlurbTitle);

                const profileBlurbTitleText = document.createElement('H1');
                profileBlurbTitleText.id = 'profileBlurbTitleText';
                profileBlurbTitleText.innerHTML = 'Hi, my name is James.'
                document.querySelector('#profileBlurbTitle').appendChild(profileBlurbTitleText);

            const profileBlurb = document.createElement('div');
            profileBlurb.id = 'profileBlurb';
            document.querySelector('#profileBlurbContainer').appendChild(profileBlurb);

                const profileBlurbText = document.createElement('p');
                profileBlurbText.id = 'profileBlurbText';
                profileBlurbText.innerHTML = blurb;
                document.querySelector('#profileBlurb').appendChild(profileBlurbText);

            const skillsContainer = document.createElement('div');
            skillsContainer.id = 'skillsContainer';
            document.querySelector('#profileBlurbContainer').appendChild(skillsContainer);

                const skillsText = document.createElement('p');
                skillsText.id = 'skillsText';
                skillsText.innerHTML = 'Please Check out some of my projects below.';
                document.querySelector('#skillsContainer').appendChild(skillsText);

        const profilePicContainer = document.createElement('div');
        profilePicContainer.id = 'profilePicContainer';
        document.querySelector('#topSection').appendChild(profilePicContainer);

            const profilePic = document.createElement('div');
            profilePic.id = 'profilePic';
            document.querySelector('#profilePicContainer').appendChild(profilePic);

    // const skillsContainer = document.createElement('div');
    // skillsContainer.id = 'skillsContainer';
    // document.querySelector('#profilePicContainer').appendChild(skillsContainer);

    //Create middle content container 
    const midSection = document.createElement('div'); 
    midSection.id = 'midSection';
    document.querySelector('#flexContainer').appendChild(midSection);

        const projectOneContainer = document.createElement('div');
        projectOneContainer.id = 'projectOneContainer';
        projectOneContainer.className = 'projectContainer';
        document.querySelector('#midSection').appendChild(projectOneContainer);

            const descriptionOneContainer = document.createElement('div');
            descriptionOneContainer.id = 'descriptionOneContainer';
            descriptionOneContainer.className = 'descriptionContainer';
            document.querySelector('#projectOneContainer').appendChild(descriptionOneContainer);

        const projectTwoContainer = document.createElement('div');
        projectTwoContainer.id = 'projectTwoContainer';
        projectTwoContainer.className = 'projectContainer';
        document.querySelector('#midSection').appendChild(projectTwoContainer);

            const descriptionTwoContainer = document.createElement('div');
            descriptionTwoContainer.id = 'descriptionTwoContainer';
            descriptionTwoContainer.className = 'descriptionContainer';
            document.querySelector('#projectTwoContainer').appendChild(descriptionTwoContainer);

        const projectThreeContainer = document.createElement('div');
        projectThreeContainer.id = 'projectThreeContainer';
        projectThreeContainer.className = 'projectContainer';
        document.querySelector('#midSection').appendChild(projectThreeContainer);

            const descriptionThreeContainer = document.createElement('div');
            descriptionThreeContainer.id = 'descriptionThreeContainer';
            descriptionThreeContainer.className = 'descriptionContainer';
            document.querySelector('#projectThreeContainer').appendChild(descriptionThreeContainer);  

    //Create bottom content container
    const botSection = document.createElement('div');
    botSection.id = 'botSection';
    document.querySelector('#flexContainer').appendChild(botSection);
}