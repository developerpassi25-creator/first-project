



const possibleCodes = ["Jiya", "passi", "kritika", "riya", "monika", "priya", "mannat", "evleen"];
function generateRandomCode() {
    const randomNumbers = Math.floor(Math.random() * possibleCodes.length);
    const newCode = possibleCodes[randomNumbers];
    
    
    document.getElementById('codeDisplay').textContent = newCode;
}

document.getElementById('generateButton').addEventListener('click', generateRandomCode);

generateRandomCode();
