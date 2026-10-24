//Default export a component that **contains** an array of snack objects (each with `name` and `rank`, where `1` = favorite).
//Start with the array ordered from **least favorite to most favorite**.
//Use JavaScript’s `.toSorted()` to return a new array ordered from **most favorite (rank 1) to least favorite**.
//Render the sorted snacks as a list (ordered list or using `.map()`).
//Include at least **3–5** snacks.

const SnackList = () => {
  const snacks = [
    { name: 'peanut m&ms', rank: 5 },
    { name: 'bbq chips', rank: 4 },
    { name: 'beef sticks', rank: 3 },
    { name: 'dates', rank: 2 },
    { name: 'popcorn', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>{snack.name}</li>
      ))}
    </ol>
  );
};

export default SnackList;
