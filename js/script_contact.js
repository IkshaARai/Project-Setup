// Function to get URL parameter value
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Pre-select option based on type parameter
var type = getUrlParameter('type');
if (type) {
    document.getElementById('selSubject').value = type;
}

function validateForm() {
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(function (element) {
        element.style.display = 'none';
    });

    var name = document.getElementById('name').value.trim();
    var subject = document.getElementById('selSubject').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var msg = document.getElementById('msg').value.trim();
    var isValid = true;

    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    if (subject === '') {
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    }
    if (email === '') {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    if (phone === '') {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    } else if (!/^[0-9]*$/.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    if (msg === '') {
        document.getElementById('msgError').style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        // Prevent form submission
        return false;
    }

    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    // Prevent form submission
    return false;
}
