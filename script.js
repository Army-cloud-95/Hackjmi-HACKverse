document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signupForm");
    const errorMessage = document.getElementById("errorMessage");

    function togglePasswordVisibility(inputId, toggleIconId) {
        const input = document.getElementById(inputId);
        const toggleIcon = document.getElementById(toggleIconId);

        toggleIcon.addEventListener("click", function() {
            if (input.type === "password") {
                input.type = "text";
                toggleIcon.classList.replace("ph-eye", "ph-eye-slash"); 
                input.type = "password";
                toggleIcon.classList.replace("ph-eye-slash", "ph-eye"); 
            }
        });
    }

    togglePasswordVisibility("password", "togglePassword");
    togglePasswordVisibility("confirmPassword", "toggleConfirmPassword");

    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        
        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters!";
            errorMessage.classList.remove("hidden");
            return;
        }

        
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            errorMessage.classList.remove("hidden");
            return;
        }

        errorMessage.classList.add("hidden");
        alert("Sign-up successful! 🎉");
        form.reset(); 
    });

    
    document.getElementById("googleSignIn").addEventListener("click", function() {
        alert("Google Sign-In clicked! (Integration needed)");
        
    });

    
    document.getElementById("facebookSignIn").addEventListener("click", function() {
        alert("Facebook Sign-In clicked! (Integration needed)");
        
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const roleSelect = document.getElementById("roleSelect");
    const roleDisplay = document.getElementById("roleDisplay");

    roleSelect.addEventListener("change", function () {
        roleDisplay.textContent = "You selected: " + roleSelect.value;
    });
});
