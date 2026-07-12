//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  let name = 'Bianca';
  let age = 27;
  let hobbies = ['playing guitar', 'reading', 'jogging'];

  return (
    // **Return JSX** includes:
    <div>
      <h1>All About {name}</h1>
      <p>
        {' '}
        My name is {name} and I am currently {age} years old! I am learning
        React and enjoy {hobbies[0]} in my free time. The full list of my
        hobbies are the following:{' '}
      </p>
      <ul>
        {' '}
        {hobbies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}{' '}
      </ul>
    </div>
  );
}
