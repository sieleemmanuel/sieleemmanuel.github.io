// Typing Animation
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
            this.txtElement = txtElement;
            this.words = words;
            this.txt = '';
            this.wordIndex = 0;
            this.wait = parseInt(wait, 10);
            this.type();
            this.isDeleting = false;
        }
        // Type method
    type() {
        // C.urrent index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of the current word
        const fullTxt = this.words[current];

        // check if deleting
        if (this.isDeleting) {
            // Remove a character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add a char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        // Insert text into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 150;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause a the end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 200;
        }

        setTimeout(() => this.type(), typeSpeed);

    }
}

// Init On DOM Loa11d
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

$(document).ready(function() {
    // Navbar trasistion
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("solid");
        } else {
            $(".navbar").removeClass("solid");
        }
    });
});

// ***Isotope**
// initializing Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
});

$("#nav ul li a[href^='#']").on('click', function(e) {
    // prevents default click behavior
    e.preventDefault();

    let hash = this.hash;
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 4000, function() {
        window.location.hash = hash;
    });
});

// Reset Form feilds
function submitForm() {
    document.getElementsByName('email').value = '';
    document.getElementsByName('name').value = '';
    document.getElementsByName('message').value = '';
}