// const portfolioData = [
//     {
//         name: "Lavanya",
//         role: "UXUI Designer",
//         company: "@TCS",
//         profileImage: "images/Lavanya.png",
//         portfolioImage: "images/COVER 1 1.png",
//         portfolioLink: "https://www.behance.net/gallery/214528417/FLOW-TASK",
//     },
//     {
//         name: "John Doe",
//         role: "Web Developer",
//         company: "@Google",
//         profileImage: "images/Lavanya.png",
//         portfolioImage: "images/COVER 1 1.png",
//         portfolioLink: "https://www.behance.net/gallery/214528417/FLOW-TASK",
//     },
//     {
//         name: "Jane Smith",
//         role: "Graphic Designer",
//         company: "@Meta",
//         profileImage: "images/Lavanya.png",
//         portfolioImage: "images/COVER 1 1.png",
//         portfolioLink: "https://www.behance.net/gallery/214528417/FLOW-TASK",
//     },
// ];

// // Current index to track which student is displayed
// let currentIndex = 0;

// function swipe(direction) {
//     // Update the index based on the direction
//     if (direction === "right") {
//         currentIndex = (currentIndex + 1) % portfolioData.length; // Cycle forward
//     } else if (direction === "left") {
//         currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length; // Cycle backward
//     }

//     // Get the current portfolio data
//     const currentPortfolio = portfolioData[currentIndex];

//     // Update the DOM with the new content
//     document.querySelector("#studentsimage img").src = currentPortfolio.profileImage;
//     document.querySelector(".student-name").innerText = currentPortfolio.name;
//     document.querySelector("#studentsimage span:nth-of-type(1)").innerText = currentPortfolio.role;
//     document.querySelector("#studentsimage span:nth-of-type(2)").innerText = currentPortfolio.company;
//     document.querySelector("#studentsportfolio img").src = currentPortfolio.portfolioImage;
//     document.querySelector("#studentsportfolio a").href = currentPortfolio.portfolioLink;
// }

// For Faq's
function toggleFaq(header) {
    const faqItem = header.parentElement;
    const content = faqItem.querySelector('.faq-content');
    const arrow = faqItem.querySelector('.faq-arrow');

    if (content.style.display === 'block') {
        content.style.display = 'none';
        header.classList.remove('active');
    } else {
        content.style.display = 'block';
        header.classList.add('active');
    }
}



const button = document.getElementById('registerBtn');
const requestacall = document.getElementById('requestacall');
const weekendregister1 = document.getElementById('weekendregister1');
const weekendregister2 = document.getElementById('weekendregister2');
const formContainer = document.getElementById('formContainer');
const closeBtn = document.getElementById('closeBtn');
const whyusbtn = document.getElementById('whyusbtn');
const footerbtn = document.getElementById('footerbtn');
const closeSuccessBtn = document.getElementById('succespageclose');

// Register Slide Button
button.addEventListener('click', () => {

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("lookingForDemo").value = '';
    document.getElementById("selectCourse").value = '';
    document.getElementById("defining").value = '';

    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

requestacall.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

weekendregister1.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

weekendregister2.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

whyusbtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

footerbtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
});

// Close Button Register
closeBtn.addEventListener('click', () => {
    formContainer.classList.remove('active');
    setTimeout(() => {
        formContainer.style.display = 'none';
    }, 500);

    document.body.style.overflow = 'auto';
});

closeSuccessBtn.addEventListener('click', () => {
    const successpage = document.getElementById('successpage');
    successpage.classList.remove('active');
    setTimeout(() => {
        successpage.style.display = 'none';
    }, 100);

    document.body.style.overflow = 'auto';
});


function registerNow() {
	// cd /Users/zacariya236/Desktop/buildurskill/buildurskill
    // cd /Users/zacariya236/Desktop/buildyourskill/buildurskillbackend
    // mvn clean install
    // mvn spring-boot:run

    formContainer.style.display = 'block';
    var name = document.getElementById("Name").value;
    var phone = document.getElementById("Phoneno").value;
    var email = document.getElementById("Email").value;
    var selectedCourse = document.getElementById("courseDropdown").options[document.getElementById("courseDropdown").selectedIndex].text;
    var studentDefines = "";
	var studentsLookingForDemo = "";
    if (!name || !phone || !email || selectedCourse === "Select Course") {
        alert("Please fill in all the fields.");
        return;
    }

    const params = new URLSearchParams({
        studentName: name,
        studentPhone : phone,
        studentEmail : email,
        studentCourse : selectedCourse,
        studentsDefineWell : studentDefines,
        studentsLookingForDemo : studentsLookingForDemo
    });

    fetch("https://testsite-ax7e.onrender.com/api/institute/studentinformation", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString()
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error("Failed to connect to the backend");
        }
    })
    .then(data => {
        console.log("Response from backend:", data);
        alert("Data sent successfully! Response: " + data);
		document.getElementById("formContainer").style.display = 'none';
		document.getElementById("successpage").style.display = 'block';
    })
    .catch(error => {
        console.error("Error connecting to backend:", error);
        alert("Failed to send data to the backend.");
    });
}

function registerNowAdminPage(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var selectedCourse = document.getElementById("selectCourse").options[document.getElementById("selectCourse").selectedIndex].text;
    var whatDefines = document.getElementById("defining").options[document.getElementById("defining").selectedIndex].text;
    var lookingForDemo = document.getElementById("lookingForDemo").options[document.getElementById("lookingForDemo").selectedIndex].text;

    if (!name || !phone || !email || selectedCourse === "Select Course") {
        alert("Please fill in all the fields.");
         return;
    }

    const params = new URLSearchParams({
        studentName: name,
        studentPhone : phone,
        studentEmail : email,
        studentCourse : selectedCourse,
        studentsDefineWell : whatDefines,
        studentsLookingForDemo : lookingForDemo
    });

    fetch("https://testsite-ax7e.onrender.com/api/institute/studentinformation", {
        mode: 'no-cors',
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString()
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            
            throw new Error("Failed to connect to the backend");
        }
    })
    .then(data => {
        console.log("Response from backend:", data);
       // alert("Data sent successfully! Response: " + data);
		document.getElementById("formContainer").style.display = 'none';
		document.getElementById("successpage").style.display = 'block';
    })
    .catch(error => {
        console.error("Error connecting to backend:", error);
        
        alert("Failed to send data to the backend.");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const callButton = document.getElementById("callButton");
  const callPopup = document.getElementById("callPopup");
  const closePopup = document.getElementById("closePopup");

  // Show the popup when the "Call Now" button is clicked
  callButton.addEventListener("click", function () {
    callPopup.style.display = "block";
  });

  // Close the popup when the "Close" button is clicked
  closePopup.addEventListener("click", function () {
    callPopup.style.display = "none";
  });
});

