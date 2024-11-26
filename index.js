var toggleButton1 = document.getElementById("toggle-button");
var skillsList = document.getElementById("skills-list");
function toggleSkills() {
    if (skillsList) {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
        }
        else {
            skillsList.style.display = "none";
        }
    }
}
if (toggleButton1) {
    toggleButton1.addEventListener("click", toggleSkills);
}
