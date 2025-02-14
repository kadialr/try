function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-rain'); // Apply the heart-rain class
    
    // Randomly position the heart horizontally within the viewport width
    heart.style.left = Math.random() * 100 + "vw";
    
    // Randomize the animation duration to make hearts fall at different speeds
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    // Use the heart emoji 💗
    heart.innerText = '💗';
    
    // Add the heart to the document body
    document.body.appendChild(heart);
    
    // Remove the heart from the screen after its animation duration
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts at intervals of 300ms
setInterval(createHeart, 300); 


document.getElementById('openBtn').addEventListener('click', function() {
    document.querySelector('.card').classList.toggle('open');
});
