document.addEventListener("DOMContentLoaded", function() {
    const filterBtn = document.getElementById("filterBtn");

    filterBtn.addEventListener("click", function() {
        const year = document.getElementById("year").value;
        const branch = document.getElementById("branch").value;

        // Simulate fetching papers based on year and branch
        const papers = getPapers(year, branch);

        displayPapers(papers);

        // Display subject names if 4th year and CSE
        if (year === "4" && branch === "CSE") {
            displaySubjects();
        }
    });

    // Function to fetch papers (Replace with actual backend call)
    function getPapers(year, branch) {
        // Dummy data for demonstration
        const papers = [];

        // Simulate fetching papers from folders based on year
        // Assuming papers are stored in a folder structure like 'papers/year/branch'
        const folderPath = `papers/${year}/${branch}`;

        // Simulate fetching papers from the folder
        for (let i = 1; i <= 5; i++) { // Assuming there are 5 papers
            papers.push({ title: `Paper ${i}`, link: `${folderPath}/paper${i}.jpg` });
        }

        return papers;
    }

    // Function to display papers
    function displayPapers(papers) {
        const papersContainer = document.querySelector(".papers");
        papersContainer.innerHTML = "";

        papers.forEach(paper => {
            const paperElement = document.createElement("div");
            paperElement.classList.add("paper");
            paperElement.innerHTML = `<a href="${paper.link}">${paper.title}</a>`;
            papersContainer.appendChild(paperElement);
        });
    }

    // Function to display subject names for 4th year CSE
    function displaySubjects() {
        const subjectsContainer = document.querySelector(".subjects");
        subjectsContainer.innerHTML = "";

        const subjects = [
            "Automata",
            "Economics",
            "Biology",
            "EVS",
            "Mathematics 3rd Semester",
            "Mathematics 4th Semester",
            "DAA",
            "DSA",
            "Computer Architecture",
            "Computer Organization"
        ];

        subjects.forEach(subject => {
            const subjectElement = document.createElement("div");
            subjectElement.classList.add("subject");
            subjectElement.textContent = subject;
            subjectsContainer.appendChild(subjectElement);
        });
    }
});
