/**
 * Słuchacz zdarzenia DOMContentLoaded, zapewniający, że wszystkie elementy DOM są w pełni załadowane przed wykonaniem kodu.
 */
document.addEventListener("DOMContentLoaded", () => {
    /**
     * Element modalu do wyświetlania powiększonego obrazu i jego opisu.
     * @type {HTMLElement}
     */
    const modal = document.querySelector(".modal");

    /**
     * Element obrazu wewnątrz modalu do wyświetlania klikniętego obrazu.
     * @type {HTMLImageElement}
     */
    const modalImg = modal.querySelector("img");

    /**
     * Element opisu wewnątrz modalu do wyświetlania opisu obrazu.
     * @type {HTMLElement}
     */
    const modalDescription = modal.querySelector(".modal-description");

    /**
     * Przycisk zamykania modalu.
     * @type {HTMLElement}
     */
    const closeModal = modal.querySelector(".close");

    /**
     * Dodaje nasłuchiwanie zdarzenia kliknięcia do każdego obrazu w galerii, aby otworzyć modal.
     * Ustawia źródło obrazu i opis w modalu na podstawie klikniętego obrazu.
     */
    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src; // Ustawia źródło obrazu w modalu.
            modalDescription.textContent = img.id; // Ustawia opis obrazu w modalu.
            modal.classList.add("show"); // Wyświetla modal.
        });
    });

    /**
     * Dodaje nasłuchiwanie zdarzenia kliknięcia do przycisku zamykania, aby ukryć modal.
     */
    closeModal.addEventListener("click", () => {
        modal.classList.remove("show"); // Ukrywa modal.
    });

    /**
     * Dodaje nasłuchiwanie zdarzenia kliknięcia do samego modalu.
     * Zamyka modal, jeśli użytkownik kliknie poza jego zawartością.
     * @param {MouseEvent} e - Zdarzenie kliknięcia.
     */
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show"); // Zamyka modal.
        }
    });

    /**
     * Funkcjonalność wyszukiwania do filtrowania obrazów w galerii na podstawie wprowadzonego tekstu.
     */
    const searchBar = document.getElementById('searchBar'); // Element wejściowy pola wyszukiwania.

    /**
     * Zbiór wszystkich obrazów w galerii.
     * @type {NodeListOf<HTMLImageElement>}
     */
    const images = document.querySelectorAll('.gallery img');

    /**
     * Dodaje nasłuchiwanie zdarzenia wprowadzania tekstu w polu wyszukiwania.
     * Filtruje obrazy w galerii na podstawie ich tekstu alternatywnego (alt) zgodnie z zapytaniem wyszukiwania.
     */
    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase(); // Wprowadzone zapytanie w małych literach.

        images.forEach(image => {
            const altText = image.alt.toLowerCase(); // Tekst alternatywny (alt) bieżącego obrazu.
            if (altText.includes(query)) {
                image.classList.remove('hidden'); // Wyświetla obrazy pasujące do zapytania.
            } else {
                image.classList.add('hidden'); // Ukrywa obrazy niepasujące do zapytania.
            }
        });
    });
});
