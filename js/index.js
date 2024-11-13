
const quotes = [
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    document.getElementById('quoteOutput').innerHTML = `"${selectedQuote.quote}"`;
    document.getElementById('authorOutput').innerHTML = `-- ${selectedQuote.author}`;
}
