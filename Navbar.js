
document.getElementById('personal').addEventListener('click', toActive);
document.getElementById('projects').addEventListener('click', toActive);
document.getElementById('contact').addEventListener('click', toActive);

slider = document.getElementById('slide');
personal = document.getElementById('personal');
projects = document.getElementById('projects');
contact = document.getElementById('contact');
root = document.querySelector(':root');

personalTitle = document.getElementById('personalTitle');
projectsTitle = document.getElementById('projectsTitle');
contactTitle = document.getElementById('contactTitle');

collection = document.getElementsByClassName('tabs');
all = Array.prototype.slice.call(collection);

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight/3 || html.clientHeight/3) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

setInterval(function() {
    if (isInViewport(contactTitle)) {
        all.forEach(element => {
            element.classList.remove("active");
        })
        slider.style.left = '66%';
        contact.classList.add('active');}
    else if (isInViewport(projectsTitle)) {
        all.forEach(element => {
            element.classList.remove("active");
        })
        slider.style.left = '33%';
        projects.classList.add('active');}
    else if (isInViewport(personalTitle)) {
        all.forEach(element => {
            element.classList.remove("active");
        })
        slider.style.left = '0%';
        personal.classList.add('active');}
}, 100);

function toActive() {
    /* this part removes the active class 
    from all the tabs before applying it to the
    selected tab */
    all.forEach(element => {
        element.classList.remove("active");
    })

    /* this part changes the location of the slider according
    to which tab is being selected */
    if (this === personal) { slider.style.left = '0%'; 
        document.getElementById('locate').scrollIntoView();
        
    }
    else if (this === projects) { slider.style.left = '33%'; 
        document.getElementById('pr-tab').scrollIntoView();
    }
    else { slider.style.left = '66%'; 
        document.getElementById('ct-tab').scrollIntoView();
    }

    /* this activates the active class */
    this.classList.add('active');
 
}