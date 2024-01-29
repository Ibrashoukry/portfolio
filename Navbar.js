
document.getElementById('personal').addEventListener('click', toActive);
document.getElementById('projects').addEventListener('click', toActive);
document.getElementById('contact').addEventListener('click', toActive);

slider = document.getElementById('slide');
personal = document.getElementById('personal');
projects = document.getElementById('projects');
contact = document.getElementById('contact');
root = document.querySelector(':root');

collection = document.getElementsByClassName('tabs');
all = Array.prototype.slice.call(collection);

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
        document.getElementById('about').scrollIntoView();
        
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