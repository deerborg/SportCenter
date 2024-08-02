document.getElementById('menu-icon').addEventListener('click', function() {
    var navItem = document.getElementById('nav-item');
    var menuIcon = document.getElementById('menu-icon');
    if (navItem.classList.contains('open')) {
        navItem.classList.remove('open');
        menuIcon.innerHTML = '&#9776;';
    } else {
        navItem.classList.add('open');
        menuIcon.innerHTML = '&times;';
    }
});

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

defaultOurClassesSectionDiv();

window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    if (window.scrollY > 0) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});


const triangle = document.querySelector(".triangle");

const weight = document.querySelector("#weight");
const height = document.querySelector("#height");

document.addEventListener('input', function() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiResult = document.getElementById('bmi-result');
    const triangle = document.querySelector('.triangle');

    if (weightInput.value && heightInput.value) {
      const weight = parseFloat(weightInput.value);
      const heightCm = parseFloat(heightInput.value);
      const heightM = heightCm / 100;

      const bmi = (weight / (heightM * heightM)).toFixed(2);

      bmiResult.textContent = bmi;

      triangle.classList.remove('under', 'normal', 'over', 'obese', 'exobese');

      if (bmi < 18.5) {
        triangle.classList.add('under');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        triangle.classList.add('normal');
      } else if (bmi >= 25 && bmi < 29.9) {
        triangle.classList.add('over');
      } else if (bmi >= 30 && bmi < 39.9) {
        triangle.classList.add('obese');
      } else if (bmi >= 40) {
        triangle.classList.add('exobese');
      }
    } else {
      bmiResult.textContent = '';
      triangle.classList.remove('under', 'normal', 'over', 'obese', 'exobese');
    }
  });