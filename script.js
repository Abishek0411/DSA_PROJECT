function addContact() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    // You can perform validation and send data to the server using AJAX here
    // For simplicity, let's just display the input in the output section
    var outputSection = document.getElementById("output-section");
    var contactInfo = document.createElement("div");
    contactInfo.innerHTML = "<strong>Name:</strong> " + name + "<br>" +
        "<strong>Phone Number:</strong> " + number + "<br>" +
        "<strong>Email:</strong> " + email + "<br><br>";
    outputSection.appendChild(contactInfo);
}
