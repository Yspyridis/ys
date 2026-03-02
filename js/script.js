const nlp_demo_button = document.getElementById("nlp_demo");
const nlp_github_button = document.getElementById("nlp_github");
const dash_github_button = document.getElementById("dash_github");

if (nlp_demo_button) {
  nlp_demo_button.addEventListener("click", function () {
    window.open("https://statement-classification.streamlit.app/", "_blank");
  });
}

if (nlp_github_button) {
  nlp_github_button.addEventListener("click", function () {
    window.open(
      "https://github.com/Yspyridis/defense_argument_classification_app",
      "_blank",
    );
  });
}

if (dash_github_button) {
  dash_github_button.addEventListener("click", function () {
    window.open("https://github.com/Yspyridis/iim_dashboard", "_blank");
  });
}

const nlp_preview = document.getElementById("nlp_preview");
const close_nlp_preview = document.getElementById("close_nlp_preview");
const preview_nlp = document.getElementById("preview_nlp");

if (nlp_preview && preview_nlp) {
  nlp_preview.addEventListener("click", function () {
    preview_nlp.style.display = "block";
    const research = document.getElementById("research");
    if (research) research.style.display = "none";
    document.body.style.overflow = "hidden";
  });
}

if (close_nlp_preview && preview_nlp) {
  close_nlp_preview.addEventListener("click", function () {
    preview_nlp.style.display = "none";
    const research = document.getElementById("research");
    if (research) research.style.display = "block";
    document.body.style.overflow = "visible";
  });
}

if (preview_nlp) {
  window.addEventListener("click", function (event) {
    if (event.target == preview_nlp) {
      preview_nlp.style.display = "none";
      const research = document.getElementById("research");
      if (research) research.style.display = "block";
      document.body.style.overflow = "visible";
    }
  });
}

const dash_preview = document.getElementById("dash_preview");
const close_dash_preview = document.getElementById("close_dash_preview");
const preview_dash = document.getElementById("preview_dash");

if (dash_preview && preview_dash) {
  dash_preview.addEventListener("click", function () {
    preview_dash.style.display = "block";
    const research = document.getElementById("research");
    if (research) research.style.display = "none";
    document.body.style.overflow = "hidden";
  });
}

if (close_dash_preview && preview_dash) {
  close_dash_preview.addEventListener("click", function () {
    preview_dash.style.display = "none";
    const research = document.getElementById("research");
    if (research) research.style.display = "block";
    document.body.style.overflow = "visible";
  });
}

if (preview_dash) {
  window.addEventListener("click", function (event) {
    if (event.target == preview_dash) {
      preview_dash.style.display = "none";
      const research = document.getElementById("research");
      if (research) research.style.display = "block";
      document.body.style.overflow = "visible";
    }
  });
}

const accButtons = document.querySelectorAll(".acc-btn");
const accContents = document.querySelectorAll(".acc-content");

accButtons.forEach((accBtn) => {
  accBtn.addEventListener("click", function () {
    const nextContent = this.nextElementSibling;
    const accBtnId = this.id;

    if (!nextContent) return;

    if (
      nextContent.style.display === "none" ||
      nextContent.style.display === ""
    ) {
      accContents.forEach((content) => {
        content.style.display = "none";
      });
      nextContent.style.display = "block";
      const research = document.getElementById("research");
      if (research) {
        research.style.height = "fit-content";
      }
    } else {
      nextContent.style.display = "none";
    }
  });
});
