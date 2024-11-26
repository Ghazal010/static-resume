const toggleButton1 = document.getElementById("toggle-button") as HTMLButtonElement | null;
const skillsList = document.getElementById("skills-list") as HTMLElement | null;

function toggleSkills(): void {
    if (skillsList) {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
        } else {
            skillsList.style.display = "none";
        }
    }
}

if (toggleButton1) {
    toggleButton1.addEventListener("click", toggleSkills);
}
