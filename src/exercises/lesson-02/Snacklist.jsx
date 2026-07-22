function SnackList() {
  const snacks = [
    {
      id: 0,
      name: 'Peanut M&Ms',
      rank: 5,
    },
    {
      id: 1,
      name: 'pretzel sticks',
      rank: 4,
    },

    {
      id: 2,
      name: 'beef sticks',
      rank: 3,
    },
    {
      id: 3,
      name: 'dates',
      rank: 2,
    },
    {
      id: 4,
      name: 'popcorn',
      rank: 1,
    },
  ];

  const snackSorted = [...snacks];
  {
    snackSorted.toSorted();
  }

  return (
    <>
      <ol>
        {snackSorted.map((snacks) => (
          <li key={snacks.id}>{snacks.name}</li>
        ))}
        ;
      </ol>
    </>
  );
}

export default SnackList;
