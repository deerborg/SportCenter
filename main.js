const yoga = document.querySelector("#yoga");
const group = document.querySelector("#group");
const solo = document.querySelector("#solo");
const stretch = document.querySelector("#stretching");

const classesText = document.querySelector("#classes-text");
const classesImg = document.querySelector("#classes-img");

function updateOurClassesSection(title, description, times, imgSrc, imgAlt) {
    classesText.classList.remove('fade-in');
    classesImg.classList.remove('fade-in');
    
    void classesText.offsetWidth;
    void classesImg.offsetWidth;
    
    classesText.innerHTML = `
        <div class="section">
            <h1>Why choose ${title}?</h1>
            <p>${description}</p>
        </div>
        <div class="section">
            <h1>When are ${title} sessions available?</h1>
            ${times.map(time => `<p>${time}</p>`).join('')}
        </div>
    `;

    classesImg.innerHTML = `
        <img src="${imgSrc}" alt="${imgAlt}">
    `;

    classesText.classList.add('fade-in');
    classesImg.classList.add('fade-in');
}

function defaultOurClassesSectionDiv() {
    updateOurClassesSection("Yoga", 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.", 
        ["Saturday-Sunday: 8:00am - 10:00am", "Monday-Tuesday: 10:00am - 12:00pm", "Wednesday-Friday: 3:00pm - 6:00pm"], 
        "images/yoga.jpg", 
        "Yoga class"
    );
}

group.addEventListener("click", () => {
    updateOurClassesSection("Group", 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.", 
        ["Saturday-Sunday: 8:00am - 10:00am", "Monday-Tuesday: 10:00am - 12:00pm", "Wednesday-Friday: 3:00pm - 6:00pm"], 
        "images/group.webp", 
        "Group class"
    );
});

solo.addEventListener("click", () => {
    updateOurClassesSection("Solo", 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.", 
        ["Saturday-Sunday: 8:00am - 10:00am", "Monday-Tuesday: 10:00am - 12:00pm", "Wednesday-Friday: 3:00pm - 6:00pm"], 
        "images/solo.jpg", 
        "Solo class"
    );
});

stretch.addEventListener("click", () => {
    updateOurClassesSection("Stretching", 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.", 
        ["Saturday-Sunday: 8:00am - 10:00am", "Monday-Tuesday: 10:00am - 12:00pm", "Wednesday-Friday: 3:00pm - 6:00pm"], 
        "images/stret.webp", 
        "Stretching class"
    );
});

yoga.addEventListener("click", () => {
    updateOurClassesSection("Yoga", 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.", 
        ["Saturday-Sunday: 8:00am - 10:00am", "Monday-Tuesday: 10:00am - 12:00pm", "Wednesday-Friday: 3:00pm - 6:00pm"], 
        "images/yoga.jpg", 
        "Yoga class"
    );
});

document.addEventListener("DOMContentLoaded", () => {
    defaultOurClassesSectionDiv();
});


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

