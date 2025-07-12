// Smooth scrolling for navigation links and scroll indicator
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll indicator functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        // Hide scroll indicator when user scrolls
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            if (scrollPosition > windowHeight * 0.1) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '0.7';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
});

// Random Accumulating Word Animation - MUCH FASTER SPEED
document.addEventListener('DOMContentLoaded', function() {
    const words = Array.from(document.querySelectorAll('.word'));
    const visibleWords = [];
    let availableWords = [...words];
    
    function getRandomWord() {
        if (availableWords.length === 0) {
            return null;
        }
        
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const selectedWord = availableWords[randomIndex];
        
        availableWords.splice(randomIndex, 1);
        
        return selectedWord;
    }
    
    function showNextWord() {
        const nextWord = getRandomWord();
        
        if (nextWord) {
            nextWord.classList.add('visible');
            visibleWords.push(nextWord);
            
            visibleWords.forEach((visibleWord, index) => {
                visibleWord.classList.remove('faded-1', 'faded-2', 'faded-3', 'faded-4', 'faded-5', 'faded-old');
                
                const stepsBack = visibleWords.length - 1 - index;
                
                if (stepsBack === 1) {
                    visibleWord.classList.add('faded-1');
                } else if (stepsBack === 2) {
                    visibleWord.classList.add('faded-2');
                } else if (stepsBack === 3) {
                    visibleWord.classList.add('faded-3');
                } else if (stepsBack === 4) {
                    visibleWord.classList.add('faded-4');
                } else if (stepsBack === 5) {
                    visibleWord.classList.add('faded-5');
                } else if (stepsBack > 5) {
                    visibleWord.classList.add('faded-old');
                }
            });
            
            setTimeout(showNextWord, 650);
        } else {
            setTimeout(() => {
                words.forEach(word => {
                    word.classList.remove('visible', 'faded-1', 'faded-2', 'faded-3', 'faded-4', 'faded-5', 'faded-old');
                });
                
                visibleWords.length = 0;
                availableWords = [...words];
                
                setTimeout(showNextWord, 1000);
            }, 3000);
        }
    }
    
    setTimeout(showNextWord, 500);
});

// Timeline animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe expertise items
document.querySelectorAll('.expertise-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe research areas
document.querySelectorAll('.research-area').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// LinkedIn button hover effect
document.querySelectorAll('.linkedin-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
