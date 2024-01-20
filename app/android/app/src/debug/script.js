document.addEventListener('DOMContentLoaded', function () {
    const storyButton = document.getElementById('storyButton');

    storyButton.addEventListener('click', function () {
        // Toggle the 'active' class to change the button appearance
        storyButton.classList.toggle('active');
        
        // Add your logic to handle the story creation or navigation
        if (storyButton.classList.contains('active')) {
            // The button is active, handle story creation or navigation
            handleStoryClick();
        } else {
            // The button is not active, handle closing the story or other actions
            handleStoryClose();
        }
    });
});

function handleStoryClick() {
    // Add your logic for story creation or navigation when the button is clicked
    console.log('Story button clicked - handle story creation or navigation.');
}

function handleStoryClose() {
    // Add your logic for closing the story or other actions when the button is not active
    console.log('Story button closed - handle closing the story or other actions.');
}
