function showContent(topic) {
    const contentDivs = document.querySelectorAll('.content > div');
    contentDivs.forEach(div => div.style.display = 'none');
    
    const tabButtons = document.querySelectorAll('.tabs button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    const selectedContent = document.getElementById(topic);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
    const clickedButton = document.querySelector(`.tabs button[data-topic="${topic}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

showContent('introduction');
