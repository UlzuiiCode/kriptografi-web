// Global Variables
let operationCounter = 0;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Show specific page and update navigation
 * @param {string} pageName - Name of the page to show
 */
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById('page-' + pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Find and activate the clicked nav item
    const clickedNav = Array.from(navItems).find(item => 
        item.getAttribute('onclick').includes(pageName)
    );
    if (clickedNav) {
        clickedNav.classList.add('active');
    }
    
    // Close mobile menu after selection
    closeMobileMenu();
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuToggle = document.getElementById('mobileMenuToggle');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Hide hamburger button when sidebar is open
    if (sidebar.classList.contains('active')) {
        menuToggle.classList.add('hidden');
    } else {
        menuToggle.classList.remove('hidden');
    }
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuToggle = document.getElementById('mobileMenuToggle');
    
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    
    // Show hamburger button when sidebar is closed
    menuToggle.classList.remove('hidden');
}

/**
 * Initialize the application
 */
function initializeApp() {
    setupKeyInputListener();
    generateAsciiTable();
    updateKeyDisplay();
}

/**
 * Setup event listener for key input
 */
function setupKeyInputListener() {
    const keyInput = document.getElementById('keyInput');
    keyInput.addEventListener('input', updateKeyDisplay);
}

/**
 * Update the key display badge
 */
function updateKeyDisplay() {
    const keyInput = document.getElementById('keyInput');
    const key = parseInt(keyInput.value) || 0;
    const clampedKey = Math.max(0, Math.min(255, key));
    document.getElementById('keyDisplay').textContent = clampedKey;
}

/**
 * Generate ASCII reference table (characters 32-126)
 */
function generateAsciiTable() {
    const tbody = document.getElementById('asciiTableBody');
    const descriptions = getAsciiDescriptions();
    const descriptionsIndo = getAsciiDescriptionsIndo();

    for (let i = 32; i <= 126; i++) {
        const row = createAsciiTableRow(i, descriptions, descriptionsIndo);
        tbody.appendChild(row);
    }
}

/**
 * Get ASCII character descriptions
 * @returns {Object} Object mapping ASCII codes to descriptions
 */
function getAsciiDescriptions() {
    return {
        32: 'Space',
        33: 'Exclamation mark',
        34: 'Double quote',
        35: 'Hash/Number sign',
        36: 'Dollar sign',
        37: 'Percent sign',
        38: 'Ampersand',
        39: 'Single quote',
        40: 'Left parenthesis',
        41: 'Right parenthesis',
        42: 'Asterisk',
        43: 'Plus sign',
        44: 'Comma',
        45: 'Hyphen/Minus',
        46: 'Period',
        47: 'Slash',
        58: 'Colon',
        59: 'Semicolon',
        60: 'Less than',
        61: 'Equals',
        62: 'Greater than',
        63: 'Question mark',
        64: 'At sign',
        91: 'Left bracket',
        92: 'Backslash',
        93: 'Right bracket',
        94: 'Caret',
        95: 'Underscore',
        96: 'Backtick',
        123: 'Left brace',
        124: 'Vertical bar',
        125: 'Right brace',
        126: 'Tilde'
    };
}

/**
 * Get ASCII character descriptions in Indonesian
 * @returns {Object} Object mapping ASCII codes to Indonesian descriptions
 */
function getAsciiDescriptionsIndo() {
    return {
        32: 'Spasi',
        33: 'Tanda seru',
        34: 'Tanda kutip ganda',
        35: 'Tanda pagar/Nomor',
        36: 'Tanda dolar',
        37: 'Tanda persen',
        38: 'Ampersand',
        39: 'Tanda kutip tunggal',
        40: 'Kurung buka',
        41: 'Kurung tutup',
        42: 'Asterisk/Bintang',
        43: 'Tanda tambah',
        44: 'Koma',
        45: 'Tanda hubung/Minus',
        46: 'Titik',
        47: 'Garis miring',
        58: 'Titik dua',
        59: 'Titik koma',
        60: 'Lebih kecil',
        61: 'Sama dengan',
        62: 'Lebih besar',
        63: 'Tanda tanya',
        64: 'Tanda at',
        91: 'Kurung siku buka',
        92: 'Garis miring terbalik',
        93: 'Kurung siku tutup',
        94: 'Tanda sisipan',
        95: 'Garis bawah',
        96: 'Backtick',
        123: 'Kurung kurawal buka',
        124: 'Garis vertikal',
        125: 'Kurung kurawal tutup',
        126: 'Tilde'
    };
}

/**
 * Create a table row for ASCII reference
 * @param {number} asciiCode - ASCII code value
 * @param {Object} descriptions - Description mapping (English)
 * @param {Object} descriptionsIndo - Description mapping (Indonesian)
 * @returns {HTMLElement} Table row element
 */
function createAsciiTableRow(asciiCode, descriptions, descriptionsIndo) {
    const row = document.createElement('tr');
    const char = String.fromCharCode(asciiCode);
    let desc = descriptions[asciiCode];
    let descIndo = descriptionsIndo[asciiCode];
    
    if (!desc) {
        if (asciiCode >= 48 && asciiCode <= 57) {
            desc = `Digit ${asciiCode - 48}`;
            descIndo = `Angka ${asciiCode - 48}`;
        } else if (asciiCode >= 65 && asciiCode <= 90) {
            desc = `Uppercase ${char}`;
            descIndo = `Huruf besar ${char}`;
        } else if (asciiCode >= 97 && asciiCode <= 122) {
            desc = `Lowercase ${char}`;
            descIndo = `Huruf kecil ${char}`;
        }
    }

    row.innerHTML = `
        <td>${asciiCode}</td>
        <td class="ascii-char">${char}</td>
        <td>${desc}</td>
        <td>${descIndo}</td>
    `;
    
    return row;
}

/**
 * Caesar Cipher algorithm
 * @param {string} text - Input text
 * @param {number} key - Shift key (0-255)
 * @param {string} mode - 'encrypt' or 'decrypt'
 * @returns {Object} Object containing result and visualization
 */
function caesarCipher(text, key, mode) {
    let result = '';
    const visualizationContainer = document.createDocumentFragment();
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const ascii = char.charCodeAt(0);
        let newAscii;
        
        if (mode === 'encrypt') {
            newAscii = (ascii + key) % 256;
        } else {
            newAscii = (ascii - key + 256) % 256;
        }
        
        const vizStep = createVisualizationStep(i + 1, char, ascii, key, newAscii, mode);
        visualizationContainer.appendChild(vizStep);
        
        result += String.fromCharCode(newAscii);
    }
    
    return { result, visualizationContainer };
}

/**
 * Create visualization step HTML
 * @param {number} index - Character index
 * @param {string} char - Original character
 * @param {number} ascii - ASCII value
 * @param {number} key - Shift key
 * @param {number} newAscii - New ASCII value
 * @param {string} mode - 'encrypt' or 'decrypt'
 * @returns {HTMLElement} Visualization step element
 */
function createVisualizationStep(index, char, ascii, key, newAscii, mode) {
    const resultChar = String.fromCharCode(newAscii);
    const div = document.createElement('div');
    div.className = 'viz-step';
    
    const strong = document.createElement('strong');
    strong.textContent = `Char ${index}:`;
    
    if (mode === 'encrypt') {
        div.appendChild(strong);
        div.appendChild(document.createTextNode(` '${char}' → ASCII ${ascii} → (${ascii} + ${key}) mod 256 = ${newAscii} → '${resultChar}'`));
    } else {
        div.appendChild(strong);
        div.appendChild(document.createTextNode(` '${char}' → ASCII ${ascii} → (${ascii} - ${key} + 256) mod 256 = ${newAscii} → '${resultChar}'`));
    }
    
    return div;
}

/**
 * Validate input before processing
 * @param {string} message - Input message
 * @param {number} key - Shift key
 * @returns {boolean} True if valid, false otherwise
 */
function validateInput(message, key) {
    if (!message) {
        alert('Please enter a message!');
        return false;
    }

    if (key < 0 || key > 255) {
        alert('Key must be between 0 and 255!');
        return false;
    }

    return true;
}

/**
 * Encrypt button handler
 */
function encrypt() {
    const message = document.getElementById('messageInput').value;
    const key = parseInt(document.getElementById('keyInput').value) || 0;
    
    if (!validateInput(message, key)) {
        return;
    }

    const { result, visualizationContainer } = caesarCipher(message, key, 'encrypt');
    
    displayResult(result, visualizationContainer);
    addToHistory('ENCRYPT', key, message, result);
}

/**
 * Decrypt button handler
 */
function decrypt() {
    const message = document.getElementById('messageInput').value;
    const key = parseInt(document.getElementById('keyInput').value) || 0;
    
    if (!validateInput(message, key)) {
        return;
    }

    const { result, visualizationContainer } = caesarCipher(message, key, 'decrypt');
    
    displayResult(result, visualizationContainer);
    addToHistory('DECRYPT', key, message, result);
}

/**
 * Display result and visualization
 * @param {string} result - Cipher result
 * @param {DocumentFragment} visualizationContainer - Visualization DOM elements
 */
function displayResult(result, visualizationContainer) {
    document.getElementById('output').textContent = result;
    
    const vizElement = document.getElementById('visualization');
    vizElement.innerHTML = ''; // Clear previous content
    vizElement.appendChild(visualizationContainer);
}

/**
 * Add operation to history table
 * @param {string} mode - 'ENCRYPT' or 'DECRYPT'
 * @param {number} key - Shift key
 * @param {string} input - Input text
 * @param {string} output - Output text
 */
function addToHistory(mode, key, input, output) {
    operationCounter++;
    const tbody = document.getElementById('historyBody');
    
    // Remove "no operations" message if it exists
    if (operationCounter === 1) {
        tbody.innerHTML = '';
    }
    
    const row = createHistoryRow(mode, key, input, output);
    
    // Add new row at the top
    tbody.insertBefore(row, tbody.firstChild);
}

/**
 * Create history table row
 * @param {string} mode - Operation mode
 * @param {number} key - Shift key
 * @param {string} input - Input text
 * @param {string} output - Output text
 * @returns {HTMLElement} Table row element
 */
function createHistoryRow(mode, key, input, output) {
    const row = document.createElement('tr');
    const modeColor = mode === 'ENCRYPT' ? '#667eea' : '#764ba2';
    
    row.innerHTML = `
        <td>${operationCounter}</td>
        <td><strong style="color: ${modeColor}">${mode}</strong></td>
        <td>${key}</td>
        <td title="${input}">${truncateText(input)}</td>
        <td title="${output}">${truncateText(output)}</td>
    `;
    
    return row;
}

/**
 * Truncate text for display
 * @param {string} text - Text to truncate
 * @param {number} maxLen - Maximum length
 * @returns {string} Truncated text
 */
function truncateText(text, maxLen = 50) {
    return text.length > maxLen ? text.substring(0, maxLen) + '...' : text;
}

/**
 * Reset form to initial state
 */
function resetForm() {
    // Clear message input
    document.getElementById('messageInput').value = '';
    
    // Reset key to default (3)
    document.getElementById('keyInput').value = 3;
    updateKeyDisplay();
    
    // Clear output
    document.getElementById('output').textContent = 'Your result will appear here...';
    
    // Clear visualization
    document.getElementById('visualization').innerHTML = 'Process details will appear here after encryption or decryption...';
    
    // Show confirmation (optional)
    console.log('Form reset successfully');
}