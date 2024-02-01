let dayData = {
    SUN: { title: "", description: "" },
    MON: { title: "", description: "" },
    TUE: { title: "", description: "" },
    WED: { title: "", description: "" },
    THU: { title: "", description: "" },
    FRI: { title: "", description: "" },
    SAT: { title: "", description: "" },
}
function storeDay(day) {
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const title1 = document.getElementById("title1");
    const title2 = document.getElementById("title2");
    const dayButtons = document.querySelectorAll('.day');

    if (titleInput && descriptionInput && title1 && title2) {
        dayData[day].title = titleInput.value;
        dayData[day].description = descriptionInput.value;

      
        const day1Content = document.getElementById("day1Content");
        if (day1Content) {
            day1Content.innerHTML = `
                <input id="title1" type="text" placeholder="Title" value="${dayData[day].title}">
                <input id="description1" type="text" placeholder="Description" value="${dayData[day].description}">
                <button class="float" onclick="deleteData('${day}')">Delete</button>
            `;
            day1Content.style.display = "block";

          
            const title1Div = document.getElementById("day1");
            if (title1Div) {
                title1Div.style.display = "block";
            }
        }

      
        

        if (title2.classList) {
            title2.classList.add('highlight');
        }

        dayButtons.forEach(button => {
            if (button.classList) {
                button.classList.remove('active');
            }
        });

        const clickedButton = document.getElementById(day);
        if (clickedButton && clickedButton.classList) {
            clickedButton.classList.add('active');
        }
    } else {
        console.error("One or more elements not found.");
    }
}
function deleteData(day) {
    const title1Div = document.getElementById("day1");
    const title2 = document.getElementById("title2");
    const dayButtons = document.querySelectorAll('.day');

    if (title1Div && title2) {
        
        title1Div.innerHTML = "";
        title1Div.style.display = "none";

     
        dayData[day].title = "";
        dayData[day].description = "";

        
        title2.classList.remove('highlight');

        dayButtons.forEach(button => {
            button.classList.remove('active');
        });
    } else {
        console.error("One or more elements not found.");
    }
}

