const Quotes = () => {
  const quote = ['Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston', 'Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein, German theoretical physicist', 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers. — Shakuntala Devi, Indian writer and mental calculator', 'Mathematics is the most beautiful and most powerful creation of the human spirit. — Stefan Banach, Polish mathematician', 'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics.— Katherine Johnson, African-American mathematician'];
  return (
    <div className="py-2 w-full h-full flex justify-between items-center">
      <p className="text-2xl text-center">{quote[Math.floor(Math.random() * (5 - (0)) + (0))]}</p>
    </div>
  );
};

export default Quotes;
