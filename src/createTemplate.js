export default function createTemplate(){
    const blurb =   `I'm an aspiring web developer based in Carmarthenshire, 
                    South Wales. After more than ten years working in CAD/CAM programming 
                    and production automation in the extrusion die industry, I am now beginning 
                    a new journey in web development. `;
                    // I have experience in HTML, CSS, JavaScript, 
                    // Webpack, and Git.`;

    const WPMSblurb =   `WPMS (Works Progress Management System) - This is a system to track the 
                        production of the components of an extrusion die as they move across the 
                        factory floor. This project is the third version of WPMS and is primarily 
                        a re-design of the UI.  `;

    const positionOneText = `In this role, I was responsible for creating CAD/CAM output, including 
                            developing new solid-modelling methods, and production automation procedures. 
                            I was also responsible for producing internal production tools, such as WPMS shown above.`;

    const positionTwoText = `In this role, I was responsible for creating CAM output for CNC mills 
                            and wire-EDM, as well as developing production automation processes and 
                            CAM macros. I was also responsible for using CMM to ensure production quality. `;

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

        // const menuContactButton = document.createElement('div');
        // menuContactButton.id = 'menuContactButton';
        // menuContactButton.className = 'menuButton';
        // document.querySelector('#menuButtonContainer').appendChild(menuContactButton);

    //Create and append the flex container that holds the center content and padding divs 
    const flexContainer = document.createElement('div');
    flexContainer.id = 'flexContainer';
    document.querySelector('#content').appendChild(flexContainer);

    //Create top section container
    const topSection = document.createElement('div');
    topSection.id = 'topSection';
    document.querySelector('#flexContainer').appendChild(topSection);

        const leftPadding = document.createElement('div');
        leftPadding.id = 'leftPadding';
        leftPadding.className = 'padding';
        document.querySelector('#topSection').appendChild(leftPadding);

        const topCenterContainer = document.createElement('div');
        topCenterContainer.id = 'topCenterContainer';
        document.querySelector('#topSection').appendChild(topCenterContainer);

            const profileBlurbContainer = document.createElement('div');
            profileBlurbContainer.id = 'profileBlurbContainer';
            document.querySelector('#topCenterContainer').appendChild(profileBlurbContainer);

                const profileBlurbTitle = document.createElement('div');
                profileBlurbTitle.id = 'profileBlurbTitle';
                document.querySelector('#profileBlurbContainer').appendChild(profileBlurbTitle);

                    const profileBlurbTitleText = document.createElement('H1');
                    profileBlurbTitleText.id = 'profileBlurbTitleText';
                    profileBlurbTitleText.innerHTML = 'Hi! my name is James...'
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

                    const skillsTextContainer = document.createElement('div');
                    skillsTextContainer.id = 'skillsTextContainer';
                    document.querySelector('#skillsContainer').appendChild(skillsTextContainer);

                        const skillsText = document.createElement('p');
                        skillsText.id = 'skillsText';
                        skillsText.innerHTML = 'I have experience in:';
                        document.querySelector('#skillsTextContainer').appendChild(skillsText);

                    const skillsIconsContainer = document.createElement('div');
                    skillsIconsContainer.id = 'skillsIconsContainer';
                    document.querySelector('#skillsContainer').appendChild(skillsIconsContainer);

                        const skillsIconsOuter1 = document.createElement('div');
                        skillsIconsOuter1.id = 'skillsIconsOuter1';
                        skillsIconsOuter1.className = 'skillsIconsOuter';
                        document.querySelector('#skillsIconsContainer').appendChild(skillsIconsOuter1);

                            const skillsIconsInner1 = document.createElement('div');
                            skillsIconsInner1.id = 'skillsIconsInner1';
                            skillsIconsInner1.className = 'skillsIconsInner';
                            document.querySelector('#skillsIconsOuter1').appendChild(skillsIconsInner1);

                                const skillsIconsInnerIcon1 = document.createElement('div');
                                skillsIconsInnerIcon1.id = 'skillsIconsInnerIcon1';
                                skillsIconsInnerIcon1.className = 'skillsIconsInnerIcon';
                                document.querySelector('#skillsIconsInner1').appendChild(skillsIconsInnerIcon1);

                            const skillsTag1 = document.createElement('div');
                            skillsTag1.id = 'skillsTag1';
                            skillsTag1.className = 'skillsTag';
                            document.querySelector('#skillsIconsOuter1').appendChild(skillsTag1);

                                const skillsText1 = document.createElement('p');
                                skillsText1.id = 'skillsText1';
                                skillsText1.innerHTML = 'HTML5';
                                document.querySelector('#skillsTag1').appendChild(skillsText1);

                        const skillsIconsOuter2 = document.createElement('div');
                        skillsIconsOuter2.id = 'skillsIconsOuter2';
                        skillsIconsOuter2.className = 'skillsIconsOuter';
                        document.querySelector('#skillsIconsContainer').appendChild(skillsIconsOuter2);

                            const skillsIconsInner2 = document.createElement('div');
                            skillsIconsInner2.id = 'skillsIconsInner2';
                            skillsIconsInner2.className = 'skillsIconsInner';
                            document.querySelector('#skillsIconsOuter2').appendChild(skillsIconsInner2);

                                const skillsIconsInnerIcon2 = document.createElement('div');
                                skillsIconsInnerIcon2.id = 'skillsIconsInnerIcon2';
                                skillsIconsInnerIcon2.className = 'skillsIconsInnerIcon';
                                document.querySelector('#skillsIconsInner2').appendChild(skillsIconsInnerIcon2);

                            const skillsTag2 = document.createElement('div');
                            skillsTag2.id = 'skillsTag2';
                            skillsTag2.className = 'skillsTag';
                            document.querySelector('#skillsIconsOuter2').appendChild(skillsTag2);

                                const skillsText2 = document.createElement('p');
                                skillsText2.id = 'skillsText2';
                                skillsText2.innerHTML = 'CSS3';
                                document.querySelector('#skillsTag2').appendChild(skillsText2);

                        const skillsIconsOuter3 = document.createElement('div');
                        skillsIconsOuter3.id = 'skillsIconsOuter3';
                        skillsIconsOuter3.className = 'skillsIconsOuter';
                        document.querySelector('#skillsIconsContainer').appendChild(skillsIconsOuter3);

                            const skillsIconsInner3 = document.createElement('div');
                            skillsIconsInner3.id = 'skillsIconsInner3';
                            skillsIconsInner3.className = 'skillsIconsInner';
                            document.querySelector('#skillsIconsOuter3').appendChild(skillsIconsInner3);

                                const skillsIconsInnerIcon3 = document.createElement('div');
                                skillsIconsInnerIcon3.id = 'skillsIconsInnerIcon3';
                                skillsIconsInnerIcon3.className = 'skillsIconsInnerIcon';
                                document.querySelector('#skillsIconsInner3').appendChild(skillsIconsInnerIcon3);

                            const skillsTag3 = document.createElement('div');
                            skillsTag3.id = 'skillsTag3';
                            skillsTag3.className = 'skillsTag';
                            document.querySelector('#skillsIconsOuter3').appendChild(skillsTag3);

                                const skillsText3 = document.createElement('p');
                                skillsText3.id = 'skillsText3';
                                skillsText3.innerHTML = 'JavaScript';
                                document.querySelector('#skillsTag3').appendChild(skillsText3);

                        const skillsIconsOuter4 = document.createElement('div');
                        skillsIconsOuter4.id = 'skillsIconsOuter4';
                        skillsIconsOuter4.className = 'skillsIconsOuter';
                        document.querySelector('#skillsIconsContainer').appendChild(skillsIconsOuter4);

                            const skillsIconsInner4 = document.createElement('div');
                            skillsIconsInner4.id = 'skillsIconsInner4';
                            skillsIconsInner4.className = 'skillsIconsInner';
                            document.querySelector('#skillsIconsOuter4').appendChild(skillsIconsInner4);

                                const skillsIconsInnerIcon4 = document.createElement('div');
                                skillsIconsInnerIcon4.id = 'skillsIconsInnerIcon4';
                                skillsIconsInnerIcon4.className = 'skillsIconsInnerIcon';
                                document.querySelector('#skillsIconsInner4').appendChild(skillsIconsInnerIcon4);

                            const skillsTag4 = document.createElement('div');
                            skillsTag4.id = 'skillsTag4';
                            skillsTag4.className = 'skillsTag';
                            document.querySelector('#skillsIconsOuter4').appendChild(skillsTag4);

                                const skillsText4 = document.createElement('p');
                                skillsText4.id = 'skillsText4';
                                skillsText4.innerHTML = 'React.js';
                                document.querySelector('#skillsTag4').appendChild(skillsText4);

                        const skillsIconsOuter5 = document.createElement('div');
                        skillsIconsOuter5.id = 'skillsIconsOuter5';
                        skillsIconsOuter5.className = 'skillsIconsOuter';
                        document.querySelector('#skillsIconsContainer').appendChild(skillsIconsOuter5);

                            const skillsIconsInner5 = document.createElement('div');
                            skillsIconsInner5.id = 'skillsIconsInner5';
                            skillsIconsInner5.className = 'skillsIconsInner';
                            document.querySelector('#skillsIconsOuter5').appendChild(skillsIconsInner5);

                                const skillsIconsInnerIcon5 = document.createElement('div');
                                skillsIconsInnerIcon5.id = 'skillsIconsInnerIcon5';
                                skillsIconsInnerIcon5.className = 'skillsIconsInnerIcon';
                                document.querySelector('#skillsIconsInner5').appendChild(skillsIconsInnerIcon5);

                            const skillsTag5 = document.createElement('div');
                            skillsTag5.id = 'skillsTag5';
                            skillsTag5.className = 'skillsTag';
                            document.querySelector('#skillsIconsOuter5').appendChild(skillsTag5);

                                const skillsText5 = document.createElement('p');
                                skillsText5.id = 'skillsText5';
                                skillsText5.innerHTML = 'Node.js';
                                document.querySelector('#skillsTag5').appendChild(skillsText5);


            const profilePicContainer = document.createElement('div');
            profilePicContainer.id = 'profilePicContainer';
            document.querySelector('#topCenterContainer').appendChild(profilePicContainer);

                const profilePic = document.createElement('div');
                profilePic.id = 'profilePic';
                document.querySelector('#profilePicContainer').appendChild(profilePic);

        const rightPadding = document.createElement('div');
        rightPadding.id = 'rightPadding';
        rightPadding.className = 'padding';
        document.querySelector('#topSection').appendChild(rightPadding);

    //Create middle content container 
    const midSection = document.createElement('div'); 
    midSection.id = 'midSection';
    document.querySelector('#flexContainer').appendChild(midSection);

        const projectTitleContainer = document.createElement('div');
        projectTitleContainer.id = 'projectTitleContainer';
        projectTitleContainer.className = 'projectTitleContainer';
        document.querySelector('#midSection').appendChild(projectTitleContainer);

            const projectTitleleftpad = document.createElement('div');
            projectTitleleftpad.id = 'projectTitleleftpad';
            projectTitleleftpad.className = 'padding';
            document.querySelector('#projectTitleContainer').appendChild(projectTitleleftpad);

            const projectTitleTextContainer = document.createElement('div');
            projectTitleTextContainer.id = 'projectTitleTextContainer';
            projectTitleTextContainer.className = 'projectTitleTextContainer';
            document.querySelector('#projectTitleContainer').appendChild(projectTitleTextContainer);

                const projectTitleText = document.createElement('p');
                projectTitleText.id = 'projectTitleText';
                projectTitleText.innerHTML = 'Projects:';
                document.querySelector('#projectTitleTextContainer').appendChild(projectTitleText);

            const projectTitleRightPad = document.createElement('div');
            projectTitleRightPad.id = 'projectTitleRightPad';
            projectTitleRightPad.className = 'padding';
            document.querySelector('#projectTitleContainer').appendChild(projectTitleRightPad);

        const projectPreviewContainer = document.createElement('div');
        projectPreviewContainer.id = 'projectPreviewContainer';
        projectPreviewContainer.className = 'projectPreviewContainer';
        document.querySelector('#midSection').appendChild(projectPreviewContainer);

            const projectOneContainer = document.createElement('div');
            projectOneContainer.id = 'projectOneContainer';
            projectOneContainer.className = 'projectContainer';
            document.querySelector('#projectPreviewContainer').appendChild(projectOneContainer);

                const descriptionOneContainer = document.createElement('div');
                descriptionOneContainer.id = 'descriptionOneContainer';
                descriptionOneContainer.className = 'descriptionContainer';
                // descriptionOneContainer.innerHTML = WPMSblurb;
                document.querySelector('#projectOneContainer').appendChild(descriptionOneContainer);

                    const descriptionOneText = document.createElement('p');
                    descriptionOneText.id = 'descriptionOneText';
                    descriptionOneText.className = 'descriptionText';
                    descriptionOneText.innerHTML = WPMSblurb;
                    document.querySelector('#descriptionOneContainer').appendChild(descriptionOneText);

                const projectOneButtonContainer = document.createElement('div');
                projectOneButtonContainer.id = 'projectOneButtonContainer';
                projectOneButtonContainer.className = 'projectButtonContainer';
                document.querySelector('#descriptionOneContainer').appendChild(projectOneButtonContainer);

                    const projectOneButton = document.createElement('div');
                    projectOneButton.id = 'projectOneButton';
                    projectOneButton.className = 'projectButton';
                    document.querySelector('#projectOneButtonContainer').appendChild(projectOneButton);

                        const projectOneButtonText = document.createElement('p');
                        projectOneButtonText.id = 'projectOneButtonText';
                        projectOneButtonText.className = 'projectButtonText';
                        projectOneButtonText.innerHTML = "See Project ->";
                        document.querySelector('#projectOneButton').appendChild(projectOneButtonText);

            const projectTwoContainer = document.createElement('div');
            projectTwoContainer.id = 'projectTwoContainer';
            projectTwoContainer.className = 'projectContainer';
            document.querySelector('#projectPreviewContainer').appendChild(projectTwoContainer);

                const projectTwoPlaceholder = document.createElement('p');
                projectTwoPlaceholder.id = 'projectTwoPlaceholder';
                projectTwoPlaceholder.className = 'projectPlaceholder';
                projectTwoPlaceholder.innerHTML = "Coming Soon";
                document.querySelector('#projectTwoContainer').appendChild(projectTwoPlaceholder);

                const descriptionTwoContainer = document.createElement('div');
                descriptionTwoContainer.id = 'descriptionTwoContainer';
                descriptionTwoContainer.className = 'descriptionContainer';
                document.querySelector('#projectTwoContainer').appendChild(descriptionTwoContainer);

            const projectThreeContainer = document.createElement('div');
            projectThreeContainer.id = 'projectThreeContainer';
            projectThreeContainer.className = 'projectContainer';
            document.querySelector('#projectPreviewContainer').appendChild(projectThreeContainer);

                const projectThreePlaceholder = document.createElement('p');
                projectThreePlaceholder.id = 'projectThreePlaceholder';
                projectThreePlaceholder.className = 'projectPlaceholder';
                projectThreePlaceholder.innerHTML = "Coming Soon";
                document.querySelector('#projectThreeContainer').appendChild(projectThreePlaceholder);

                const descriptionThreeContainer = document.createElement('div');
                descriptionThreeContainer.id = 'descriptionThreeContainer';
                descriptionThreeContainer.className = 'descriptionContainer';
                document.querySelector('#projectThreeContainer').appendChild(descriptionThreeContainer);  

    //Create bottom content container
    const botSection = document.createElement('div');
    botSection.id = 'botSection';
    document.querySelector('#flexContainer').appendChild(botSection);

        const botLeftPadding = document.createElement('div');
        botLeftPadding.id = 'botLeftPadding';
        botLeftPadding.className = 'padding';
        document.querySelector('#botSection').appendChild(botLeftPadding);

        const botContent = document.createElement('div');
        botContent.id = 'botContent';
        document.querySelector('#botSection').appendChild(botContent);

            const positionsContainer = document.createElement('div');
            positionsContainer.id = 'positionsContainer';
            document.querySelector('#botContent').appendChild(positionsContainer);

                const positionsTitle = document.createElement('div');
                positionsTitle.id = 'positionsTitle';
                document.querySelector('#positionsContainer').appendChild(positionsTitle);

                    const positionsTitleText = document.createElement('H2');
                    positionsTitleText.id = 'positionsTitleText';
                    positionsTitleText.innerHTML = 'Previous Positions:';
                    document.querySelector('#positionsTitle').appendChild(positionsTitleText);

                const positionsOne = document.createElement('div');
                positionsOne.id = 'positionsOne';
                positionsOne.className = 'positions';
                document.querySelector('#positionsContainer').appendChild(positionsOne);

                    const positionsHeaderContainerOne = document.createElement('div');
                    positionsHeaderContainerOne.id = 'positionsHeaderContainerOne';
                    positionsHeaderContainerOne.className = 'positionHeaderContainer';
                    positionsHeaderContainerOne.innerHTML = 'CAD/CAM Programmer & IT Manager - Alutool Preform Ltd';
                    document.querySelector('#positionsOne').appendChild(positionsHeaderContainerOne);

                    const positionsDateContainerOne = document.createElement('div');
                    positionsDateContainerOne.id = 'positionsDateContainerOne';
                    positionsDateContainerOne.className = 'positionDateContainer';
                    positionsDateContainerOne.innerHTML = '2019 - 2024';
                    document.querySelector('#positionsOne').appendChild(positionsDateContainerOne);

                    const positionsBodyContainerOne = document.createElement('div');
                    positionsBodyContainerOne.id = 'positionsBodyContainerOne';
                    positionsBodyContainerOne.className = 'positionBodyContainer';
                    positionsBodyContainerOne.innerHTML = positionOneText;
                    document.querySelector('#positionsOne').appendChild(positionsBodyContainerOne);

                const positionsTwo = document.createElement('div');
                positionsTwo.id = 'positionsTwo';
                positionsTwo.className = 'positions';
                document.querySelector('#positionsContainer').appendChild(positionsTwo);

                    const positionsHeaderContainerTwo = document.createElement('div');
                    positionsHeaderContainerTwo.id = 'positionsHeaderContainerTwo';
                    positionsHeaderContainerTwo.className = 'positionHeaderContainer';
                    positionsHeaderContainerTwo.innerHTML = 'CAD/CAM Programmer - Extrusion Form Tools Ltd';
                    document.querySelector('#positionsTwo').appendChild(positionsHeaderContainerTwo);

                    const positionsDateContainerTwo = document.createElement('div');
                    positionsDateContainerTwo.id = 'positionsDateContainerTwo';
                    positionsDateContainerTwo.className = 'positionDateContainer';
                    positionsDateContainerTwo.innerHTML = '2013 - 2019';
                    document.querySelector('#positionsTwo').appendChild(positionsDateContainerTwo);

                    const positionsBodyContainerTwo = document.createElement('div');
                    positionsBodyContainerTwo.id = 'positionsBodyContainerTwo';
                    positionsBodyContainerTwo.className = 'positionBodyContainer';
                    positionsBodyContainerTwo.innerHTML = positionTwoText;
                    document.querySelector('#positionsTwo').appendChild(positionsBodyContainerTwo);

                // const positionsThree = document.createElement('div');
                // positionsThree.id = 'positionsOne';
                // positionsThree.className = 'positions';
                // document.querySelector('#positionsContainer').appendChild(positionsThree);

            const contactContainer = document.createElement('div');
            contactContainer.id = 'contactContainer';
            document.querySelector('#botContent').appendChild(contactContainer);

                const contactGitContainer = document.createElement('div');
                contactGitContainer.id = 'contactGitContainer';
                contactGitContainer.className = 'contactItem';
                contactGitContainer.innerHTML = 'Find me on GitHub';
                document.querySelector('#contactContainer').appendChild(contactGitContainer);

                const contactLinkedContainer = document.createElement('div');
                contactLinkedContainer.id = 'contactLinkedContainer';
                contactLinkedContainer.className = 'contactItem';
                contactLinkedContainer.innerHTML = 'Find me on LinkedIn';
                document.querySelector('#contactContainer').appendChild(contactLinkedContainer);

                const contactCVContainer = document.createElement('div');
                contactCVContainer.id = 'contactCVContainer';
                contactCVContainer.className = 'contactItem';
                contactCVContainer.innerHTML = 'See my full CV here';
                document.querySelector('#contactContainer').appendChild(contactCVContainer);

        const botRightPadding = document.createElement('div');
        botRightPadding.id = 'botRightPadding';
        botRightPadding.className = 'padding';
        document.querySelector('#botSection').appendChild(botRightPadding);

    //Create top section container
    const footerSection = document.createElement('div');
    footerSection.id = 'footerSection';
    document.querySelector('#flexContainer').appendChild(footerSection);
}