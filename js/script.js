const nlp_demo_button = document.getElementById('nlp_demo');
const nlp_github_button = document.getElementById('nlp_github');
const dash_github_button = document.getElementById('dash_github');

nlp_demo_button.addEventListener('click', function () {
    window.open("https://statement-classification.streamlit.app/", '_blank');
});

nlp_github_button.addEventListener('click', function () {
    window.open("https://github.com/Yspyridis/defense_argument_classification_app", '_blank');
});

dash_github_button.addEventListener('click', function () {
    window.open("https://github.com/Yspyridis/iim_dashboard", '_blank');
});



const nlp_preview = document.getElementById('nlp_preview');
const close_nlp_preview = document.getElementById('close_nlp_preview');
const preview_nlp = document.getElementById('preview_nlp');

nlp_preview.addEventListener('click', function () {
    preview_nlp.style.display = 'block';
    document.getElementById('research').style.display = 'none';
    document.querySelector('footer').style.bottom = '-400px';
    document.body.style.overflow = 'hidden';
});

close_nlp_preview.addEventListener('click', function () {
    preview_nlp.style.display = 'none';
    document.getElementById('research').style.display = 'block';
    document.querySelector('footer').style.bottom = '0px';
    document.body.style.overflow = 'visible';
});

window.addEventListener('click', function (event) {
    if (event.target == preview_nlp) {
        preview_nlp.style.display = 'none';
    }
});


const dash_preview = document.getElementById('dash_preview');
const close_dash_preview = document.getElementById('close_dash_preview');
const preview_dash = document.getElementById('preview_dash');

dash_preview.addEventListener('click', function () {
    preview_dash.style.display = 'block';
    document.getElementById('research').style.display = 'none';
    document.querySelector('footer').style.bottom = '-400px';
    document.body.style.overflow = 'hidden';
});

close_dash_preview.addEventListener('click', function () {
    preview_dash.style.display = 'none';
    document.getElementById('research').style.display = 'block';
    document.querySelector('footer').style.bottom = '0px';
    document.body.style.overflow = 'visible';
});

window.addEventListener('click', function (event) {
    if (event.target == preview_dash) {
        preview_dash.style.display = 'none';
    }
});


const accButtons = document.querySelectorAll('.acc-btn');
const accContents = document.querySelectorAll('.acc-content');

accButtons.forEach(accBtn => {
    accBtn.addEventListener('click', function () {
        const nextContent = this.nextElementSibling;
        const accBtnId = this.id;

        if (nextContent.style.display === "none" || nextContent.style.display === "") {
            accContents.forEach(content => {
                content.style.display = "none";
            });
            nextContent.style.display = "block";
            if (accBtnId === "journal") {
                // document.querySelector('footer').style.bottom = '-300px';
                document.getElementById('research').style.height = 'fit-content';
            } else {
                // document.querySelector('footer').style.bottom = '-700px';
                document.getElementById('research').style.height = 'fit-content';
            }
        } else {
            nextContent.style.display = "none";
            document.querySelector('footer').style.bottom = '0px';
        }
    });
});


