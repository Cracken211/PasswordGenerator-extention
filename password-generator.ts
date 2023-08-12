// Simple project to solve my problem of having to go to a random website to generate my password. 
// Made into an extension for ease of access

const lowerCaseChars: string[] = [
    // Lowercase letters
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

const upperCaseChars: string[] = [
    // Uppercase letters
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

const numericChars: string[] = [
    // Numeric digits
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
];

const symbolicChars: string[] = [
    // Symbols
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
    '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?'
];
// Generation end

let includeNumeric: boolean = true;
let includeSymbols: boolean = true;
let includeUpperCase: boolean = true;
let includeLowerCase: boolean = true;

function getRandomNumber(min: number, max: number): number {
    const randomValue = Math.random();
    const selectedRange = randomValue * (max - min) + min;
    return Math.floor(selectedRange);
}

function generatePassword(
    includeNumeric: boolean,
    includeSymbols: boolean,
    includeUpperCase: boolean,
    includeLowerCase: boolean,
    passwordLength: number
): string {
    console.log("Generating password...");
    let validChars: string[] = [];
    if (includeNumeric) {
        validChars = validChars.concat(numericChars);
    }
    if (includeSymbols) {
        validChars = validChars.concat(symbolicChars);
    }
    if (includeUpperCase) {
        validChars = validChars.concat(upperCaseChars);
    }
    if (includeLowerCase) {
        validChars = validChars.concat(lowerCaseChars);
    }

    if (validChars.length === 0) {
        return "";
    }

    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = getRandomNumber(0, validChars.length);

        generatedPassword += validChars[randomIndex];
    }

    return generatedPassword;
}

function copyToClipboard() {
    const generatedPasswordTextarea = document.getElementById("generated-password") as HTMLTextAreaElement;
    if (generatedPasswordTextarea) {
        const content = generatedPasswordTextarea.textContent;
        if (content !== null && content.trim() !== "") {
            navigator.clipboard.writeText(content);
            generatedPasswordTextarea.textContent = "Copied! 📋"
        }
    }
}




document.addEventListener("DOMContentLoaded", () => {
    const passwordLengthInput = document.getElementById("password-length") as HTMLInputElement;
    const includeNumericCheckbox = document.getElementById("include-numeric") as HTMLInputElement;
    const includeSymbolsCheckbox = document.getElementById("include-symbols") as HTMLInputElement;
    const includeUppercaseCheckbox = document.getElementById("include-uppercase") as HTMLInputElement;
    const includeLowercaseCheckbox = document.getElementById("include-lowercase") as HTMLInputElement;
    const generateButton = document.getElementById("generate-button");
    const generatedPasswordTextarea = document.getElementById("generated-password") as HTMLTextAreaElement;

    // Get the slider number to display to user
    const passwordLengthSlider = document.getElementById("password-length") as HTMLInputElement;
    const lengthDisplay = document.getElementById("length-display");

    if (passwordLengthSlider && lengthDisplay) {
        passwordLengthSlider.addEventListener("input", () => {
            const passwordLength = +passwordLengthSlider.value;
            lengthDisplay.textContent = passwordLength.toString();
        });
    }

    if (
        passwordLengthInput &&
        includeNumericCheckbox &&
        includeSymbolsCheckbox &&
        includeUppercaseCheckbox &&
        includeLowercaseCheckbox &&
        generateButton &&
        generatedPasswordTextarea
    ) {
        generateButton.addEventListener("click", () => {
            const passwordLength = +passwordLengthInput.value;
            const includeNumeric = includeNumericCheckbox.checked;
            const includeSymbols = includeSymbolsCheckbox.checked;
            const includeUppercase = includeUppercaseCheckbox.checked;
            const includeLowercase = includeLowercaseCheckbox.checked;

            const generatedPassword = generatePassword(
                includeNumeric,
                includeSymbols,
                includeUppercase,
                includeLowercase,
                passwordLength
            );

            generatedPasswordTextarea.value = generatedPassword;
            console.log("Generated Password:", generatedPassword);
        });
    }
});