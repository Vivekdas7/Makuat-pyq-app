document.addEventListener("DOMContentLoaded", function() {
    const filterBtn = document.getElementById("filterBtn");

    filterBtn.addEventListener("click", function() {
        const year = document.getElementById("year").value;
        const branch = document.getElementById("branch").value;

        // Display subject names if 3rd year and CSE
        if (year === "3" && branch === "CSE") {
            displaySubjects();
        }
        else if (year === "4" && branch === "CSE") {
            displaySubjects1();
        }
       
    });

    // Function to display subject names for 3rd year CSE
    function displaySubjects() {
        const subjectsContainer = document.querySelector(".subjects");
        subjectsContainer.innerHTML = "";

        const subjects = [
            { name: "Automata", page: "automata.html" },
            { name: "Economics", page: "economics.html" },
            { name: "Biology", page: "biology.html" },
            { name: "EVS", page: "evs.html" },
            { name: "Mathematics 3rd Semester", page: "math_3rd_sem.html" },
            { name: "Mathematics 4th Semester", page: "math_4th_sem.html" },
            { name: "DAA", page: "daa.html" },
            { name: "DSA", page: "dsa.html" },
            { name: "Computer Architecture", page: "comp_architecture.html" },
            { name: "Computer Organization", page: "comp_organization.html" }
        ];

        subjects.forEach(subject => {
            const subjectElement = document.createElement("div");
            subjectElement.classList.add("subject");
            subjectElement.textContent = subject.name;
            subjectElement.addEventListener("click", function() {
                openPage(subject.page);
            });
            subjectsContainer.appendChild(subjectElement);
        });

        // Show popup
        showPopup();
    }
    function displaySubjects1() {
        const subjectsContainer = document.querySelector(".subjects");
        subjectsContainer.innerHTML = "";

        const subjects = [
            { name: "Mathematics", page: "automata.html" },
            { name: "Mathematics", page: "automata.html" },
            
        ];

        subjects.forEach(subject => {
            const subjectElement = document.createElement("div");
            subjectElement.classList.add("subject");
            subjectElement.textContent = subject.name;
            subjectElement.addEventListener("click", function() {
                openPage(subject.page);
            });
            subjectsContainer.appendChild(subjectElement);
        });

        // Show popup
        showPopup();
    }

    // Function to open a new HTML page
    function openPage(page) {
        // Navigate to the specified HTML page
        window.location.href = page;
    }

    // Function to show popup
    function showPopup() {
        console.log("Showing popup...");
        
        // Create modal
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Subjects loaded successfully!</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Show modal
        modal.style.display = "block";

        console.log("Modal displayed.");

        // Close modal when clicked on close button
        const closeButton = modal.querySelector(".close");
        closeButton.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Close modal after 3 seconds
        setTimeout(function() {
            console.log("Closing popup...");
            modal.style.display = "none";
        }, 3000);
    }
});
