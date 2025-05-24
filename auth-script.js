// Authentication Application State
const authState = {
    currentForm: 'login',
    isLoading: false,
    user: null,
    rememberMe: false,
    twoFactorEnabled: false
};

// Mock user database (in real app, this would be server-side)
const mockUsers = [
    {
        id: 1,
        email: 'demo@marketanalyzer.com',
        password: 'Demo123!',
        firstName: 'Demo',
        lastName: 'User',
        accountType: 'professional',
        twoFactorEnabled: true,
        verified: true
    }
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
});

function initializeAuth() {
    console.log('Authentication system initialized');
    
    // Initialize event listeners
    initializeTabSwitching();
    initializeFormValidation();
    initializePasswordToggles();
    initializeTwoFactorAuth();
    initializeSocialAuth();
    initializeFormSubmissions();
    
    // Check for existing session
    checkExistingSession();
    
    // Initialize password strength checker
    initializePasswordStrength();
    
    // Initialize email validation
    initializeEmailValidation();
}

// Tab Switching
function initializeTabSwitching() {
    const tabs = document.querySelectorAll('.auth-tab');
    const indicator = document.querySelector('.auth-indicator');
    const forms = document.querySelectorAll('.auth-form-container');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            switchTab(targetTab);
        });
    });
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.auth-tab');
    const indicator = document.querySelector('.auth-indicator');
    const forms = document.querySelectorAll('.auth-form-container');
    
    // Update active tab
    tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    
    // Move indicator
    if (indicator) {
        indicator.classList.toggle('signup', tabName === 'signup');
    }
    
    // Show corresponding form
    forms.forEach(form => {
        form.classList.remove('active');
    });
    
    const targetForm = document.getElementById(`${tabName}Form`);
    if (targetForm) {
        targetForm.classList.add('active');
    }
    
    authState.currentForm = tabName;
    
    // Clear any existing validation messages
    clearValidationMessages();
}

// Password Toggle Functionality
function initializePasswordToggles() {
    const toggleButtons = document.querySelectorAll('.password-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const targetInput = document.getElementById(targetId);
            const icon = button.querySelector('i');
            
            if (targetInput.type === 'password') {
                targetInput.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                targetInput.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });
    });
}

// Form Validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('.auth-form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    // Clear previous validation
    clearFieldError(field);
    
    // Required field validation
    if (!value) {
        showFieldError(field, `${getFieldLabel(fieldName)} is required`);
        return false;
    }
    
    // Email validation
    if (fieldType === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Password validation
    if (fieldName === 'password' || fieldName === 'signupPassword') {
        const passwordValidation = validatePassword(value);
        if (!passwordValidation.isValid) {
            showFieldError(field, passwordValidation.message);
            return false;
        }
    }
    
    // Confirm password validation
    if (fieldName === 'confirmPassword') {
        const passwordField = document.getElementById('signupPassword');
        if (value !== passwordField.value) {
            showFieldError(field, 'Passwords do not match');
            return false;
        }
    }
    
    // Show success state
    showFieldSuccess(field);
    return true;
}

function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length < minLength) {
        return { isValid: false, message: 'Password must be at least 8 characters long' };
    }
    
    if (!hasUpperCase) {
        return { isValid: false, message: 'Password must contain at least one uppercase letter' };
    }
    
    if (!hasLowerCase) {
        return { isValid: false, message: 'Password must contain at least one lowercase letter' };
    }
    
    if (!hasNumbers) {
        return { isValid: false, message: 'Password must contain at least one number' };
    }
    
    if (!hasSpecialChar) {
        return { isValid: false, message: 'Password must contain at least one special character' };
    }
    
    return { isValid: true, message: 'Password is strong' };
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    const wrapper = field.closest('.form-group');
    let feedback = wrapper.querySelector('.input-feedback');
    
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'input-feedback';
        wrapper.appendChild(feedback);
    }
    
    feedback.textContent = message;
    feedback.className = 'input-feedback error';
}

function showFieldSuccess(field) {
    field.classList.remove('error');
    field.classList.add('valid');
    
    const wrapper = field.closest('.form-group');
    const feedback = wrapper.querySelector('.input-feedback');
    
    if (feedback && field.name === 'email') {
        feedback.textContent = 'Email is valid';
        feedback.className = 'input-feedback success';
    }
}

function clearFieldError(field) {
    field.classList.remove('error');
    
    const wrapper = field.closest('.form-group');
    const feedback = wrapper.querySelector('.input-feedback');
    
    if (feedback && !feedback.classList.contains('success')) {
        feedback.textContent = '';
        feedback.className = 'input-feedback';
    }
}

function clearValidationMessages() {
    const inputs = document.querySelectorAll('input');
    const feedbacks = document.querySelectorAll('.input-feedback');
    
    inputs.forEach(input => {
        input.classList.remove('error', 'valid');
    });
    
    feedbacks.forEach(feedback => {
        if (!feedback.classList.contains('success')) {
            feedback.textContent = '';
            feedback.className = 'input-feedback';
        }
    });
}

function getFieldLabel(fieldName) {
    const labels = {
        email: 'Email',
        password: 'Password',
        firstName: 'First Name',
        lastName: 'Last Name',
        confirmPassword: 'Confirm Password',
        accountType: 'Account Type'
    };
    
    return labels[fieldName] || fieldName;
}

// Password Strength Indicator
function initializePasswordStrength() {
    const passwordField = document.getElementById('signupPassword');
    if (!passwordField) return;
    
    passwordField.addEventListener('input', (e) => {
        updatePasswordStrength(e.target.value);
    });
}

function updatePasswordStrength(password) {
    const strengthBar = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    if (!strengthBar || !strengthText) return;
    
    const score = calculatePasswordStrength(password);
    
    // Remove all strength classes
    strengthBar.className = 'strength-fill';
    
    if (password.length === 0) {
        strengthText.textContent = 'Password strength';
        return;
    }
    
    if (score < 2) {
        strengthBar.classList.add('weak');
        strengthText.textContent = 'Weak password';
    } else if (score < 3) {
        strengthBar.classList.add('fair');
        strengthText.textContent = 'Fair password';
    } else if (score < 4) {
        strengthBar.classList.add('good');
        strengthText.textContent = 'Good password';
    } else {
        strengthBar.classList.add('strong');
        strengthText.textContent = 'Strong password';
    }
}

function calculatePasswordStrength(password) {
    let score = 0;
    
    // Length check
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    
    // Character variety checks
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    return Math.min(score, 4);
}

// Email Validation
function initializeEmailValidation() {
    const emailField = document.getElementById('signupEmail');
    if (!emailField) return;
    
    let emailTimeout;
    
    emailField.addEventListener('input', (e) => {
        clearTimeout(emailTimeout);
        emailTimeout = setTimeout(() => {
            checkEmailAvailability(e.target.value);
        }, 500);
    });
}

function checkEmailAvailability(email) {
    if (!email || !isValidEmail(email)) return;
    
    // Simulate API call to check email availability
    setTimeout(() => {
        const isAvailable = !mockUsers.some(user => user.email === email);
        const emailField = document.getElementById('signupEmail');
        const wrapper = emailField.closest('.form-group');
        let feedback = wrapper.querySelector('.input-feedback');
        
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'input-feedback';
            wrapper.appendChild(feedback);
        }
        
        if (isAvailable) {
            feedback.textContent = 'Email is available';
            feedback.className = 'input-feedback success';
            emailField.classList.remove('error');
        } else {
            feedback.textContent = 'Email is already registered';
            feedback.className = 'input-feedback error';
            emailField.classList.add('error');
        }
    }, 300);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Two-Factor Authentication
function initializeTwoFactorAuth() {
    const codeInputs = document.querySelectorAll('.code-input');
    
    codeInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            
            // Only allow numbers
            if (!/^\d$/.test(value)) {
                e.target.value = '';
                return;
            }
            
            // Add filled class
            e.target.classList.add('filled');
            
            // Move to next input
            if (value && index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
            
            // Check if all inputs are filled
            checkTwoFactorCode();
        });
        
        input.addEventListener('keydown', (e) => {
            // Handle backspace
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                codeInputs[index - 1].focus();
                codeInputs[index - 1].classList.remove('filled');
            }
        });
        
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pastedData = e.clipboardData.getData('text');
            const digits = pastedData.replace(/\D/g, '').slice(0, 6);
            
            digits.split('').forEach((digit, i) => {
                if (codeInputs[i]) {
                    codeInputs[i].value = digit;
                    codeInputs[i].classList.add('filled');
                }
            });
            
            checkTwoFactorCode();
        });
    });
    
    // Resend code functionality
    const resendBtn = document.getElementById('resendCode');
    if (resendBtn) {
        resendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            resendTwoFactorCode();
        });
    }
}

function checkTwoFactorCode() {
    const codeInputs = document.querySelectorAll('.code-input');
    const code = Array.from(codeInputs).map(input => input.value).join('');
    
    if (code.length === 6) {
        // Auto-submit when all digits are entered
        setTimeout(() => {
            document.getElementById('twoFactorFormElement').dispatchEvent(new Event('submit'));
        }, 500);
    }
}

function resendTwoFactorCode() {
    showToast('Verification code sent', 'A new verification code has been sent to your device.', 'success');
    
    // Disable resend button temporarily
    const resendBtn = document.getElementById('resendCode');
    resendBtn.style.pointerEvents = 'none';
    resendBtn.style.opacity = '0.5';
    
    setTimeout(() => {
        resendBtn.style.pointerEvents = 'auto';
        resendBtn.style.opacity = '1';
    }, 30000); // 30 seconds
}

// Social Authentication
function initializeSocialAuth() {
    // Google authentication
    document.querySelectorAll('#googleLogin, #googleSignup').forEach(btn => {
        btn.addEventListener('click', () => handleSocialAuth('google'));
    });
    
    // Microsoft authentication
    document.querySelectorAll('#microsoftLogin, #microsoftSignup').forEach(btn => {
        btn.addEventListener('click', () => handleSocialAuth('microsoft'));
    });
    
    // Apple authentication
    document.querySelectorAll('#appleLogin, #appleSignup').forEach(btn => {
        btn.addEventListener('click', () => handleSocialAuth('apple'));
    });
}

function handleSocialAuth(provider) {
    showToast('Redirecting...', `Connecting to ${provider.charAt(0).toUpperCase() + provider.slice
    showToast('Redirecting...', `Connecting to ${provider.charAt(0).toUpperCase() + provider.slice(1)}...`, 'info');
    
    // Simulate social authentication
    setTimeout(() => {
        // In a real app, this would redirect to the provider's OAuth flow
        const userData = {
            id: Date.now(),
            email: `user@${provider}.com`,
            firstName: 'Social',
            lastName: 'User',
            accountType: 'individual',
            provider: provider,
            verified: true
        };
        
        handleSuccessfulAuth(userData);
    }, 2000);
}

// Form Submissions
function initializeFormSubmissions() {
    // Login form
    const loginForm = document.getElementById('loginFormElement');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Signup form
    const signupForm = document.getElementById('signupFormElement');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Forgot password form
    const forgotForm = document.getElementById('forgotPasswordFormElement');
    if (forgotForm) {
        forgotForm.addEventListener('submit', handleForgotPassword);
    }
    
    // Two-factor form
    const twoFactorForm = document.getElementById('twoFactorFormElement');
    if (twoFactorForm) {
        twoFactorForm.addEventListener('submit', handleTwoFactorAuth);
    }
    
    // Forgot password link
    const forgotLink = document.getElementById('forgotPasswordLink');
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            showForgotPasswordForm();
        });
    }
    
    // Back to login button
    const backToLogin = document.getElementById('backToLogin');
    if (backToLogin) {
        backToLogin.addEventListener('click', () => {
            showLoginForm();
        });
    }
    
    // Continue to app button
    const continueBtn = document.getElementById('continueToApp');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect to main app
        });
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = formData.get('remember');
    
    // Validate form
    if (!validateLoginForm(email, password)) {
        return;
    }
    
    // Show loading state
    setButtonLoading(e.target.querySelector('.auth-button'), true);
    
    // Simulate API call
    setTimeout(() => {
        const user = authenticateUser(email, password);
        
        if (user) {
            if (user.twoFactorEnabled) {
                showTwoFactorForm();
                authState.pendingUser = user;
            } else {
                handleSuccessfulAuth(user);
            }
            
            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
            }
        } else {
            showToast('Login Failed', 'Invalid email or password. Please try again.', 'error');
        }
        
        setButtonLoading(e.target.querySelector('.auth-button'), false);
    }, 1500);
}

function handleSignup(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const userData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        accountType: formData.get('accountType'),
        agreeTerms: formData.get('agreeTerms'),
        marketingEmails: formData.get('marketingEmails')
    };
    
    // Validate form
    if (!validateSignupForm(userData)) {
        return;
    }
    
    // Show loading state
    setButtonLoading(e.target.querySelector('.auth-button'), true);
    
    // Simulate API call
    setTimeout(() => {
        // Check if email already exists
        const existingUser = mockUsers.find(user => user.email === userData.email);
        
        if (existingUser) {
            showToast('Registration Failed', 'An account with this email already exists.', 'error');
        } else {
            // Create new user
            const newUser = {
                id: Date.now(),
                ...userData,
                verified: false,
                twoFactorEnabled: false,
                createdAt: new Date()
            };
            
            mockUsers.push(newUser);
            showSuccessModal();
        }
        
        setButtonLoading(e.target.querySelector('.auth-button'), false);
    }, 2000);
}

function handleForgotPassword(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    if (!email || !isValidEmail(email)) {
        showToast('Invalid Email', 'Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    setButtonLoading(e.target.querySelector('.auth-button'), true);
    
    // Simulate API call
    setTimeout(() => {
        showToast('Reset Link Sent', 'If an account exists with this email, you will receive a password reset link.', 'success');
        showLoginForm();
        setButtonLoading(e.target.querySelector('.auth-button'), false);
    }, 1500);
}

function handleTwoFactorAuth(e) {
    e.preventDefault();
    
    const codeInputs = document.querySelectorAll('.code-input');
    const code = Array.from(codeInputs).map(input => input.value).join('');
    
    if (code.length !== 6) {
        showToast('Invalid Code', 'Please enter the complete 6-digit verification code.', 'error');
        return;
    }
    
    // Show loading state
    setButtonLoading(e.target.querySelector('.auth-button'), true);
    
    // Simulate API call
    setTimeout(() => {
        // In a real app, verify the code with the server
        if (code === '123456' || code === '000000') { // Demo codes
            handleSuccessfulAuth(authState.pendingUser);
        } else {
            showToast('Invalid Code', 'The verification code is incorrect. Please try again.', 'error');
            
            // Clear code inputs
            codeInputs.forEach(input => {
                input.value = '';
                input.classList.remove('filled');
            });
            codeInputs[0].focus();
        }
        
        setButtonLoading(e.target.querySelector('.auth-button'), false);
    }, 1500);
}

// Form Validation Functions
function validateLoginForm(email, password) {
    let isValid = true;
    
    if (!email || !isValidEmail(email)) {
        showToast('Invalid Email', 'Please enter a valid email address.', 'error');
        isValid = false;
    }
    
    if (!password || password.length < 6) {
        showToast('Invalid Password', 'Password must be at least 6 characters long.', 'error');
        isValid = false;
    }
    
    return isValid;
}

function validateSignupForm(userData) {
    let isValid = true;
    
    // Check required fields
    if (!userData.firstName || !userData.lastName) {
        showToast('Missing Information', 'Please fill in all required fields.', 'error');
        isValid = false;
    }
    
    if (!userData.email || !isValidEmail(userData.email)) {
        showToast('Invalid Email', 'Please enter a valid email address.', 'error');
        isValid = false;
    }
    
    // Password validation
    const passwordValidation = validatePassword(userData.password);
    if (!passwordValidation.isValid) {
        showToast('Weak Password', passwordValidation.message, 'error');
        isValid = false;
    }
    
    // Confirm password
    if (userData.password !== userData.confirmPassword) {
        showToast('Password Mismatch', 'Passwords do not match.', 'error');
        isValid = false;
    }
    
    // Account type
    if (!userData.accountType) {
        showToast('Account Type Required', 'Please select an account type.', 'error');
        isValid = false;
    }
    
    // Terms agreement
    if (!userData.agreeTerms) {
        showToast('Terms Required', 'You must agree to the Terms of Service and Privacy Policy.', 'error');
        isValid = false;
    }
    
    return isValid;
}

// Authentication Functions
function authenticateUser(email, password) {
    return mockUsers.find(user => 
        user.email === email && user.password === password
    );
}

function handleSuccessfulAuth(user) {
    authState.user = user;
    
    // Store session
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    
    if (authState.currentForm === 'signup') {
        showSuccessModal();
    } else {
        // Redirect to main application
        showToast('Welcome Back!', `Hello ${user.firstName}, redirecting to your dashboard...`, 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}

function checkExistingSession() {
    const savedUser = sessionStorage.getItem('currentUser');
    const rememberMe = localStorage.getItem('rememberMe');
    
    if (savedUser && rememberMe) {
        const user = JSON.parse(savedUser);
        showToast('Welcome Back!', `Redirecting to your dashboard...`, 'info');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
}

// UI Helper Functions
function showLoginForm() {
    hideAllForms();
    document.getElementById('loginForm').classList.add('active');
    switchTab('login');
}

function showSignupForm() {
    hideAllForms();
    document.getElementById('signupForm').classList.add('active');
    switchTab('signup');
}

function showForgotPasswordForm() {
    hideAllForms();
    document.getElementById('forgotPasswordForm').classList.add('active');
}

function showTwoFactorForm() {
    hideAllForms();
    document.getElementById('twoFactorForm').classList.add('active');
    
    // Focus first input
    const firstInput = document.querySelector('.code-input');
    if (firstInput) {
        firstInput.focus();
    }
}

function hideAllForms() {
    document.querySelectorAll('.auth-form-container').forEach(form => {
        form.classList.remove('active');
    });
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function setButtonLoading(button, isLoading) {
    if (!button) return;
    
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// Toast Notification System
function showToast(title, message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconMap = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="${iconMap[type]}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add close functionality
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        removeToast(toast);
    });
    
    container.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeToast(toast);
    }, 5000);
}

function removeToast(toast) {
    if (toast && toast.parentNode) {
        toast.style.transform = 'translateX(100%)';
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Enter key on forms
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('form');
        if (form) {
            const submitBtn = form.querySelector('.auth-button[type="submit"], .auth-button:not([type])');
            if (submitBtn && !submitBtn.disabled) {
                submitBtn.click();
            }
        }
    }
    
    // Escape key to close modals
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal.active');
        if (modal) {
            modal.classList.remove('active');
        }
    }
});

// Accessibility improvements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}


window.addEventListener('error', (e) => {
    console.error('Authentication error:', e.error);
  


        authState,
        initializeAuth,
        handleLogin,
        handleSignup,
        showToast,
        validatePassword,
        isValidEmail
})
