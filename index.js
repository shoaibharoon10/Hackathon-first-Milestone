var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
var skillsList = document.getElementById("skills-list");
toggleSkillsBtn.addEventListener("click", function () {
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
        toggleSkillsBtn.innerHTML = "Hide Skills";
    }
    else {
        skillsList.style.display = "none";
        toggleSkillsBtn.innerHTML = "Show Skills";
    }
});
