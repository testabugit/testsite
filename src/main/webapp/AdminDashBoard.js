function leadDetails() {
    // Fetch data from the backend
    fetch('https://testsite-ax7e.onrender.com/api/institute/getleads')
        .then(response => response.json())
        .then(data => {
            // Get the container for the lead table
            const tableContainer = document.querySelector(".Lead-container");

            // Create the table structure
            tableContainer.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Lead ID</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Occupation</th>
                            <th>Course</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="lead-data">
                        <!-- Dynamic rows will be inserted here -->
                    </tbody>
                </table>
                <div class="table-footer"><button id="saveAllBtn">Save All</button></div>
            `;

            // Get the tbody for appending rows
            const tbody = document.getElementById("lead-data");
            tbody.innerHTML = ""; // Clear any existing rows

            // Populate the table rows dynamically
            data.forEach(lead => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${lead.studentsId}</td>
                    <td>${lead.studentsName}</td>
                    <td>${lead.studentsMobileNo}<br>${lead.studentsEmail}</td>
                    <td>${lead.studentsDefineWell || "N/A"}</td>
                    <td>${lead.studentsSelectedCourse}</td>
                    <td>
                        <select data-id="${lead.studentsId}">
							<option value="Not Joined" ${lead.studentsStatus === "Not Joined" ? "selected" : ""}>Not Joined</option>
                            <option value="Joined" ${lead.studentsStatus === "Joined" ? "selected" : ""}>Joined</option>
                        </select>
                    </td>
                `;
                tbody.appendChild(row);
            });

            // Add event listener to save button
            document.getElementById("saveAllBtn").addEventListener("click", () => {
                // Collect updated data
                const updates = [];
                tbody.querySelectorAll("select").forEach(select => {
                    const studentId = select.getAttribute("data-id");
                    const status = select.value;

                    updates.push({
                        studentId: parseInt(studentId, 10),
                        studentsStatus: status,
                    });
                });

                // Send updates to the backend
                fetch('http://192.168.93.215:8080/api/institute/updateLeadDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updates),
                })
                    .then(response => response.json())
                    .then(result => {
                        console.log('Save successful:', result);
                        alert('Changes saved successfully!');
                    })
                    .catch(error => console.error('Error saving changes:', error));
            });
        })
        .catch(error => console.error('Error fetching leads:', error));
}


/*
	CONVERSION DETAILS
*/
function conversionDetails() {
    fetch('https://testsite-ax7e.onrender.com/api/institute/getleads')
        .then(response => response.json())
        .then(data => {
            const tableContainer = document.querySelector(".Conversion-container");

            tableContainer.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Lead ID</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Course</th>
                            <th>Demo</th>
                            <th>Status</th>
                            <th>Fees Informed</th>
                        </tr>
                    </thead>
                    <tbody id="conversion-data">
                        <!-- Dynamic rows will be inserted here -->
                    </tbody>
                </table>
                <div class="table-footer"><button id="SaveAllBtn">Save All</button></div>
            `;

            const tbody = document.getElementById("conversion-data");
            tbody.innerHTML = "";

            data.forEach(conversion => {
                const studentId = conversion.studentsId;
                const demoStatus = conversion.studentsDemoStatus || "Not Completed"; // Default value
                const status = conversion.studentsStatus || "Not Joined"; // Default value
                const feesInformed = conversion.studentsFeesInformed || ''; // Default empty string if not provided

                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${studentId}</td>
                    <td>${conversion.studentsName}</td>
                    <td>${conversion.studentsMobileNo}<br>${conversion.studentsEmail}</td>
                    <td>${conversion.studentsSelectedCourse}</td>
                    <td>
                        <select id="demo-${studentId}">
                            <option value="Completed" ${demoStatus === "Completed" ? "selected" : ""}>Completed</option>
                            <option value="Not Completed" ${demoStatus === "Not Completed" ? "selected" : ""}>Not Completed</option>
                        </select>
                    </td>
                    <td>
                        <select id="status-${studentId}">
                            <option value="Joined" ${status === "Joined" ? "selected" : ""}>Joined</option>
                            <option value="Not Joined" ${status === "Not Joined" ? "selected" : ""}>Not Joined</option>
                        </select>
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="feesInformed-${studentId}" 
                            value="${feesInformed}" 
                            placeholder="Fees Informed">
                    </td>
                `;
                tbody.appendChild(row);
            });

            document.getElementById("SaveAllBtn").addEventListener("click", () => {
				alert("here")
                const updatedData = [];
                data.forEach(conversion => {
                    const studentId = conversion.studentsId;
                    const demoStatus = document.getElementById(`demo-${studentId}`).value;
                    const statusDemo = document.getElementById(`status-${studentId}`).value;
                    const feesInformed = document.getElementById(`feesInformed-${studentId}`).value;

                    updatedData.push({
                        studentId: studentId,
                        studentsDemoStatus: demoStatus,
                        studentsStatus: statusDemo,
                        studentsFeesInformed: feesInformed
                    });
                });

                // Debugging: Log the updatedData to ensure it's correct
                console.log("Updated Data to be saved:", updatedData);

                // Call save function to handle the data submission
                saveConversionDetails(updatedData);
            });
        })
        .catch(error => console.error('Error fetching conversion details:', error));
}

function saveConversionDetails(updatedData) {
    console.log("Updated Data for Saving:", updatedData);

    fetch('https://testsite-ax7e.onrender.com/api/institute/updateAllConversionDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(result => {
        console.log("Save successful:", result);
    })
    .catch(error => {
        console.error("Error saving data:", error);
    });
}




/*
	OUR STUDENT DETAILS
*/
function ourstudentsDetails() {
    // Fetch data from the backend
    fetch('https://testsite-ax7e.onrender.com/api/institute/getleads')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch leads');
            }
            return response.json();
        })
        .then(data => {
            // Get the container for the lead table
            const tableContainer = document.querySelector(".Ourstudents-container");

            // Create the table structure dynamically
            tableContainer.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Lead ID</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Course</th>
                            <th>Fees Paid</th>
                            <th>Fees Due</th>
                            <th>Course Duration</th>
                        </tr>
                    </thead>
                    <tbody id="ourstudents-data">
                        <!-- Dynamic rows will be inserted here -->
                    </tbody>
                </table>
                <div class="table-footer">
                    <button onclick="saveAllStudentDetails()">Save All</button>
                </div>
            `;

            // Get the tbody for appending rows
            const tbody = document.getElementById("ourstudents-data");
            tbody.innerHTML = ""; // Clear any existing rows

            // Populate the table rows dynamically
            data.forEach(ourstudents => {
                const row = document.createElement("tr");

                // Extract and validate the course duration
                const courseDuration = ourstudents.studentsCourseDuration || '';
                let courseStartDate = '';
                let courseEndDate = '';

                if (courseDuration) {
                    const durationParts = courseDuration.split(' TO ');
                    if (durationParts.length === 2) {
                        courseStartDate = durationParts[0]; // Get the start date
                        courseEndDate = durationParts[1]; // Get the end date
                    }
                }

                // Check if the dates are valid
                const startDateISO = isValidDate(courseStartDate) ? new Date(courseStartDate).toISOString().split('T')[0] : '';
				const endDateText = (courseStartDate && courseEndDate) 
				    ? `${courseStartDate}<br><strong>TO</strong><br>${courseEndDate}` 
				    : 'Select a start date';

				// Set the table row with a date input and a span for the full date range
				row.innerHTML = `
				    <td>${ourstudents.studentsId}</td>
				    <td>${ourstudents.studentsName}</td>
				    <td>${ourstudents.studentsMobileNo}<br>${ourstudents.studentsEmail}</td>
				    <td>${ourstudents.studentsSelectedCourse}</td>
				    <td>
				        <input 
				            type="text" 
				            id="feesPaid-${ourstudents.studentsId}" 
				            value="${ourstudents.studentsFeesPaid || ''}" 
				            placeholder="Fees Paid">
				    </td>
				    <td>
				        <input 
				            type="text" 
				            id="feesDue-${ourstudents.studentsId}" 
				            value="${ourstudents.studentsFeesDue || ''}" 
				            placeholder="Fees Due">
				    </td>
				    <td style="width: 11%;">
				        <span id="courseDurationText-${ourstudents.studentsId}" 
				            style="font-weight: bold; font-size: 15px; line-height: 1.2;">
				            ${endDateText}
				        </span>
				        <input 
				            type="date" 
				            id="courseStartPicker-${ourstudents.studentsId}" 
				            style="cursor: pointer; margin-top: 5%;" 
				            value="${startDateISO}" 
				            onchange="calculateDurationText(${ourstudents.studentsId})">
				    </td>
                `;

                tbody.appendChild(row);
            });

        })
        .catch(error => console.error('Error fetching leads:', error));
}

function isValidDate(date) {
    // Check if the date is a valid date string
    const parsedDate = new Date(date);
    return parsedDate instanceof Date && !isNaN(parsedDate);
}

function calculateDurationText(studentId) {
    const startDateInput = document.getElementById(`courseStartPicker-${studentId}`);
    const durationText = document.getElementById(`courseDurationText-${studentId}`);

    if (startDateInput.value) {
        // Get the date from the input and parse it as UTC
        const startDate = new Date(startDateInput.value);

        // Adjust the date to Indian Standard Time (UTC+5:30)
        const startDateIST = new Date(startDate.getTime() + (5 * 60 + 30) * 60000); // Adding IST offset

        // Format the start date for the input field (YYYY-MM-DD)
        const startDateForInput = startDateIST.toISOString().split('T')[0]; // 'YYYY-MM-DD'

        // Set the date value for the date input (without the time part)
        startDateInput.value = startDateForInput;

        // Add 3 months to the selected date
        const endDate = new Date(startDateIST);
        endDate.setMonth(startDateIST.getMonth() + 3);

        // Format both dates as 'MMM d, yyyy' (e.g., "Jan 3, 2025")
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedStartDate = startDateIST.toLocaleDateString('en-US', options);
        const formattedEndDate = endDate.toLocaleDateString('en-US', options);

        // Update the text to show the range, breaking "TO" to the next line
        durationText.innerHTML = `${formattedStartDate}<br><strong>TO</strong><br>${formattedEndDate}`;
    }
}



function saveAllStudentDetails() {
    // Collect all rows of data
    const rows = document.querySelectorAll("#ourstudents-data tr");
    const updatedStudentDetails = [];

    rows.forEach(row => {
        const studentsId = row.children[0].textContent.trim();
        const feesPaid = document.getElementById(`feesPaid-${studentsId}`).value;
        const feesDue = document.getElementById(`feesDue-${studentsId}`).value;
        const courseStartDate = document.getElementById(`courseStartPicker-${studentsId}`).value;

        // If the start date is empty, set the duration to "Invalid Date TO Invalid Date"
        let courseDuration = "";

        if (courseStartDate) {
            // Calculate end date (add 3 months to the start date)
            const startDate = new Date(courseStartDate);
            const endDate = new Date(startDate);
            endDate.setMonth(startDate.getMonth() + 3);

            // Format both dates as 'MMM d, yyyy' (e.g., "Jan 3, 2025")
            const formattedStartDate = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            const formattedEndDate = endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

            // Combine start and end date into a single string for course duration
            courseDuration = `${formattedStartDate} TO ${formattedEndDate}`;
        }

        // Add the row data to the array, now including the combined course duration
        updatedStudentDetails.push({
            studentsId,
            studentsFeesPaid: feesPaid,
            studentsFeesDue: feesDue,
            studentsCourseDuration: courseDuration,  // Send combined course duration string
        });
    });

    // Check if we have data to send
    if (updatedStudentDetails.length === 0) {
        alert('No data to save!');
        return;
    }

    // Send the array of updated student details to the backend
    fetch('https://testsite-ax7e.onrender.com/api/institute/updateOurStudentsDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStudentDetails),
    })
        .then(response => {
            if (response.ok) {
                alert('All student details saved successfully!');
            } else {
                alert('Failed to save student details. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error saving student details:', error);
            alert('An error occurred. Please try again.');
        });
}





document.addEventListener("DOMContentLoaded", () => {
    // Load the default section on page load
    leadDetails();

    // Add click handlers to toggle sections
    document.querySelector("#leadDetailsBtn").addEventListener("click", () => {
        toggleSection("Lead-container", leadDetails);
    });

    document.querySelector("#conversionDetailsBtn").addEventListener("click", () => {
        toggleSection("Conversion-container", conversionDetails);
    });

    document.querySelector("#ourstudentsDetailsBtn").addEventListener("click", () => {
        toggleSection("Ourstudents-container", ourstudentsDetails);
    });
});

document.getElementById("leadDetailsBtn").addEventListener("click", () => toggleSection("Lead-container", fetchLeadData));
document.getElementById("conversionDetailsBtn").addEventListener("click", () => toggleSection("Conversion-container", fetchConversionData));
document.getElementById("ourstudentsDetailsBtn").addEventListener("click", () => toggleSection("Ourstudents-container", fetchStudentsData));

function toggleSection(sectionToToggle, dataFetchFunction) {
    // Get all section containers
    const sections = ["Lead-container", "Conversion-container", "Ourstudents-container"];
    const buttons = {
        "Lead-container": "leadDetailsBtn",
        "Conversion-container": "conversionDetailsBtn",
        "Ourstudents-container": "ourstudentsDetailsBtn",
    };

    // Loop through sections and set display and active button class
    sections.forEach(section => {
        const sectionElement = document.querySelector(`.${section}`);
        const buttonElement = document.getElementById(buttons[section]);

        if (section === sectionToToggle) {
            // Show the selected section
            sectionElement.style.display = "block";
            dataFetchFunction(); // Fetch data for the selected section
            buttonElement.classList.add("active"); // Highlight the selected word
        } else {
            // Hide other sections and remove highlight from buttons
            sectionElement.style.display = "none";
            buttonElement.classList.remove("active");
        }
    });
}

