const Quotes = () => {
  const mathematicsQuote = [
    {
      id: 1,
      quote: 'In real life, I assure you, there is no such thing as algebra.',
      author: 'Fran Lebowitz',
    },
    {
      id: 2,
      quote: 'Mathematics expresses values that reflect the cosmos, including orderliness, balance, harmony, logic, and abstract beauty. ',
      author: ' Deepak Chopra',
    },
    {
      id: 3,
      quote: 'I had a polynomial once. My doctor removed it. ',
      author: ' Michael Grant, Gone',
    },
    {
      id: 4,
      quote: 'The difference between the poet and the mathematician is that the poet tries to get his head into the heavens while the mathematician tries to get the heavens into his head. ',
      author: 'G.K. Chesterton',
    },
    {
      id: 5,
      quote: "I couldn't claim that I was smarter than sixty-five other guys--but the average of sixty-five other guys, certainly!",
      author: 'Richard P. Feynman',
    },
    {
      id: 6,
      quote: 'Since the mathematicians have invaded the theory of relativity I do not understand it myself any more. ',
      author: 'Albert Einstein',
    },
    {
      id: 7,
      quote: 'It is the story that matters not just the ending. ',
      author: 'Paul Lockhart,',
    },
    {
      id: 8,
      quote: 'I think that modern physics has definitely decided in favor of Plato. In fact the smallest units of matter are not physical objects in the ordinary sense; they are forms, ideas which can be expressed unambiguously only in mathematical language.',
      author: 'Werner Heisenberg',
    },
    {
      id: 9,
      quote: 'They shouldnt be allowed to teach math so early in the morning ',
      author: 'Kendare Blake',
    },
    {
      id: 10,
      quote: 'Physics depends on a universe infinitely centred on an equals sign.',
      author: 'Mark Z. Danielewski',
    },
  ];
  return (
    <ul className="quote-cont">
      {
                  mathematicsQuote.map((quote) => (
                    <li key={quote.id}>
                      {quote.quote}
                      {' '}
                      <span>{quote.author}</span>
                    </li>
                  ))
              }
    </ul>

  );
};

export default Quotes;
