import { useState } from "react"
import Shelf from "./Shelf"

const Library = () => {
    const [shelves, setShelves] = useState[
      {
        genre: "Fiction",
        author: "J.K. Rowling",
        title: "Harry Potter and the Sorcerer's Stone"
      },
      {
        genre: "Mystery",
        author: "Agatha Christie",
        title: "Murder on the Orient Express"
      },
      {
        genre: "Science Fiction",
        author: "Isaac Asimov",
        title: "Foundation"
      },
      {
        genre: "Thriller",
        author: "Gillian Flynn",
        title: "Gone Girl"
      },
      {
        genre: "Historical Fiction",
        author: "Markus Zusak",
        title: "The Book Thief"
      },
      {
        genre: "Fantasy",
        author: "George R.R. Martin",
        title: "A Game of Thrones"
      },
      {
        genre: "Romance",
        author: "Jane Austen",
        title: "Pride and Prejudice"
      },
      {
        genre: "Biography",
        author: "Michelle Obama",
        title: "Becoming"
      },
      {
        genre: "Horror",
        author: "Stephen King",
        title: "The Shining"
      },
      {
        genre: "Self-Help",
        author: "Dale Carnegie",
        title: "How to Win Friends and Influence People"
      }
    ];
    
    return (
        <section>
            {
              shelves.map((shelf, index) => <Shelf key={index} genre={shelf.genre} books={shelf.books} />)  
            }
        </section>
    )
}

export default Library