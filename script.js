const quotes = {
  creative: [
    "Creativity takes courage. - Henri Matisse",
    "Every artist was first an amateur. - Ralph Waldo Emerson",
    "Creativity is contagious, pass it on. - Albert Einstein"
  ],
  earth: [
    "The Earth has music for those who listen. - William Shakespeare",
    "In every walk with nature, one receives far more than he seeks. - John Muir",
    "The Earth laughs in flowers. - Ralph Waldo Emerson"
  ],
  life: [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany"
  ],
  book: [
    "A reader lives a thousand lives before he dies. - George R.R. Martin",
    "Books are a uniquely portable magic. - Stephen King",
    "The only way to do great work is to love what you do. - Steve Jobs"
  ]
};

const quoteContainer = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const categoryButtons = document.querySelectorAll(".categoryBtn");

function getRandomQuote(category) {
  const quotesArray = quotes[category];
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[randomIndex];
}

function displayRandomQuote(category) {
  const randomQuote = getRandomQuote(category);
  quoteContainer.textContent = randomQuote;
}

function handleCategoryClick() {
  const selectedCategory = this.dataset.category;
  displayRandomQuote(selectedCategory);
}

function handleNewQuoteClick() {
  const selectedCategory = document.querySelector(".categoryBtn.active").dataset.category;
  displayRandomQuote(selectedCategory);
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", handleCategoryClick);
});

newQuoteBtn.addEventListener("click", handleNewQuoteClick);

// Initial quote display
displayRandomQuote("creative");
