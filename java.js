const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789'; 
const symbolChars = '!-$^+'; 
const spaceChar = ' '; 

function getRandomChar (chars) {
    const index = Math.floor(Math.random() * chars.length); 
    return chars[index]
}

function generatePassword() {
    
    const passwordInput = document.getElementById('password') ;
    const lowercaseCheckbox = document.getElementById('lowercase') ;
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers'); 
    const symbolsCheckbox = document.getElementById('symbols');
    const excludeDuplicateCheckbox = document.getElementById('exc-duplicate');
    const spacesCheckbox = document.getElementById('spaces');



    let characters = '';
    lowercaseCheckbox.checked? characters += lowercaseChars : '';
    uppercaseCheckbox.checked? characters += uppercaseChars : '';
    numbersCheckbox .checked ? characters += numberChars : '';
    symbolsCheckbox.checked ? characters += symbolChars : '';
    spacesCheckbox.checked ? characters += spaceChar : '';

   if (characters ==='') {
     passwordInput.value = ''
   } else {
    let password= '';
    const length = document.getElementById('password-lenght').value;
    while (password.length < length) {
        let char = getRandomChar(characters) ; 
        if (excludeDuplicateCheckbox.checked && password.includes(char) ) continue; 
        password += char;
    }

    passwordInput.value = password;
   }
}

function copyPassword () {
    const passwordInput = document.getElementById('password'); 
    const copyButton = document.getElementById('copy');
    passwordInput.disabled = false;
    
    
    //Enable the input to select its value
    passwordInput.select () ;
    document.execCommand('copy');
    passwordInput.disabled = true;  // Disable the input again
    copyButton.textContent = 'Copied';
    setTimeout (() => {
    copyButton.textContent = 'Copy';
    }, 2000);  // Reset to “Copy” after 2 seconds
}

// Show the lenght of password
const passLength = document.getElementById('password-lenght')
passLength.addEventListener('change', ()=>{
    document.getElementById('display-pass-length').textContent = `${passLength.value}`
})

