const skillButtom = document.getElementById('skillsButton')
const textBoxSkills = document.getElementById('textBoxMaisId')
let opacityValue = 0
let intervalId = null

skillButtom.addEventListener('click', function() {
    if (textBoxSkills.style.display === 'none') {
        textBoxSkills.style.display = 'block';

        intervalId = setInterval(function() {
            if (opacityValue < 1) { 
                opacityValue += 0.1;
                textBoxSkills.style.opacity = opacityValue;
            }
            else {
                clearInterval(intervalId);
            }
        }, 50);
    }
    else {
        intervalId = setInterval(function() {
            if (opacityValue > 0) {
                opacityValue -= 0.1;
                textBoxSkills.style.opacity = opacityValue;
            }
            else {
                clearInterval(intervalId);
                textBoxSkills.style.display = 'none';
            }
        }, 50);
    }
})