
// Simple JavaScript for interactive elements
document.querySelector('button').addEventListener('click', function () {
    alert('Welcome to Mathematics Day 2024!');
});
// Ramanujan's 4x4 Magic Square
{
    const magicSquare = [
    [22, 12, 18, 87],
    [88, 17, 9, 25],
    [10, 24, 89, 16],
    [19, 86, 23, 11]
];

// Function to display the magic square in the table
function displayMagicSquare() {
    const table = document.getElementById("magicSquareTable");
    table.innerHTML = ""; // Clear the table before adding new data
    
    // Loop through the magic square array and create table rows and cells
    for (let i = 0; i < 4; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            let cell = document.createElement("td");
            cell.textContent = magicSquare[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Calculate sums of rows, columns, and diagonals
    calculateSums();
}

// Function to calculate and display the sums
function calculateSums() {
    let rowSums = [];
    let colSums = [0, 0, 0, 0];
    let mainDiagonalSum = 0;
    let antiDiagonalSum = 0;

    // Calculate row sums and column sums
    for (let i = 0; i < 4; i++) {
        let rowSum = 0;
        for (let j = 0; j < 4; j++) {
            rowSum += magicSquare[i][j];
            colSums[j] += magicSquare[i][j];
        }
        rowSums.push(rowSum);
        mainDiagonalSum += magicSquare[i][i];
        antiDiagonalSum += magicSquare[i][3 - i];
    }

    // Display the sums
    let output = `
        <p>Row sums: ${rowSums.join(", ")}</p>
        <p>Column sums: ${colSums.join(", ")}</p>
        <p>Main Diagonal sum: ${mainDiagonalSum}</p>
        <p>Anti-Diagonal sum: ${antiDiagonalSum}</p>
    `;
    document.getElementById("output1").innerHTML = output;
}
}
{
 function calculateSums() {
    // Get the values from the input fields
    let square = [];
    for (let i = 0; i < 4; i++) {
        square[i] = [];
        for (let j = 0; j < 4; j++) {
            square[i][j] = parseInt(document.getElementById(`cell_${i}_${j}`).value);
        }
    }

    // Calculate row sums
    let rowSums = [];
    for (let i = 0; i < 4; i++) {
        let sum = 0;
        for (let j = 0; j < 4; j++) {
            sum += square[i][j];
        }
        rowSums.push(sum);
    }

    // Calculate column sums
    let colSums = [];
    for (let j = 0; j < 4; j++) {
        let sum = 0;
        for (let i = 0; i < 4; i++) {
            sum += square[i][j];
        }
        colSums.push(sum);
    }

    // Calculate diagonal sums
    let mainDiagonalSum = 0;
    let antiDiagonalSum = 0;
    for (let i = 0; i < 4; i++) {
        mainDiagonalSum += square[i][i];
        antiDiagonalSum += square[i][3 - i];
    }

    // Display the results
    document.getElementById('rowSum').innerHTML = `Row sums: ${rowSums.join(', ')}`;
    document.getElementById('colSum').innerHTML = `Column sums: ${colSums.join(', ')}`;
    document.getElementById('diagonalSum').innerHTML = `Main Diagonal sum: ${mainDiagonalSum}, Anti-Diagonal sum: ${antiDiagonalSum}`;
}
}// Function to generate QR code based on input URL
function generateQRCode() {
    // Get the website URL from the input field
    var websiteURL = document.getElementById("website-url").value;

    // Clear the previous QR code
    document.getElementById("qrcode").innerHTML = "";

    // Generate new QR code using qrcode.js
    QRCode.toCanvas(document.getElementById("qrcode"), websiteURL, function (error) {
        if (error) {
            console.error(error);
        }
        console.log('QR Code generated successfully!');
    });
}

// Generate the default QR code when the page loads
window.onload = function () {
    generateQRCode(); // Generate QR code for the default URL on page load
};

