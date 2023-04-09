const library = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    readingStatus: true
  },
  {
    author: "J.R.R. Tolkien",
    title: "The Lord of the Rings",
    readingStatus: false
  },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    readingStatus: true
  }
];

// Function to count the number of books that have been read
function numberOfBooksRead(library) {
  let count = 0;
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus === true) {
      count++;
    }
  }
  return count;
}

// Example usage
console.log(numberOfBooksRead(library)); // Output: 2