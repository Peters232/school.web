const summaries = [
    "Computer is an electronic device that processes that as information4.",
    "Elements are arranged into periods and groups based on properties.",
    "Metals, nonmetals, and metalloids are categorized by their characteristics.",
    "Alkali metals are found in Group 1 and are highly reactive.",
    "Alkaline earth metals are in Group 2 and are also reactive.",
    "Transition metals are found in Groups 3-12 and are known for their conductivity.",
    "Halogens are in Group 17 and are very reactive nonmetals.",
    "Noble gases are in Group 18 and are inert due to full valence shells.",
    "Lanthanides and actinides are rare earth elements with unique properties.",
    "Atomic radius decreases across a period and increases down a group.",
    "Ionization energy increases across a period and decreases down a group.",
    "Electronegativity values increase across a period and decrease down a group.",
    "Chemical reactivity varies significantly across the periodic table.",
    "The periodic table helps predict the properties of unknown elements.",
    "Dmitri Mendeleev is credited with the creation of the periodic table.",
    "The modern periodic table is organized by atomic number, not mass.",
    "Elements in the same group share similar chemical properties.",
    "The periodic law states that element properties repeat periodically.",
    "Understanding periodic trends is essential for chemistry.",
    "The periodic table is a fundamental tool in science and education."
];

let currentIndex = 0;
const flashcardsContainer = document.getElementById('flashcards');

function displayFlashcards() {
    flashcardsContainer.innerHTML = "";
    for (let i = currentIndex; i < currentIndex + 10 && i < summaries.length; i++) {
        const card = document.createElement('div');
        card.classList.add('spaces');
        card.textContent = `Summary ${i + 1}: ${summaries[i]}`;
        flashcardsContainer.appendChild(card);
    }
}

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex + 10 < summaries.length) {
        currentIndex += 10;
        displayFlashcards();
    }
});

document.getElementById('previous').addEventListener('click', () => {
    if (currentIndex - 10 >= 0) {
        currentIndex -= 10;
        displayFlashcards();
    }
});

// Initial display
displayFlashcards();