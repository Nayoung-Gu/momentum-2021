const quotes = [
    {
        quote: "Being happy never goes out of style.",
        author: "Pily Pulitzer"
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "Helen Keller"
    },
    {
        quote: "The time is always right to do what is right.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "If you don't like the road you're walking, start paving another one.",
        author: "Dolly Parton"
    },
    {
        quote: "Despite the forecast, live like it's spring.",
        author: "Lily Pulitzer"
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain"
    },
    {
        quote: "Each person much live life as a model for other.",
        author: "Rosa Parks"
    },
    {
        quote: "The biggest adventure you can take is to live the life of your dreams.",
        author: "Oprah Winfrey"
    },
    {
        quote: "All serious daring starts from within.",
        author: "Eudora Welty"
    },
    {
        quote: "I've been around a long time, and life has a whole lot of surprises for me.",
        author: "Loretta Lynn"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;