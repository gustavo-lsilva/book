import Books from "../../book.js";
import {useState} from 'react';
import "./booklist.css";

export function Home() {
    const [newBook, setNewBook] = useState(Books);

    function handleSubmit(event) {
      event.preventDefault();
  
      const { name, author, description, year, imgUrl } = event.target;
  
      const myBook = {
        name: name.value,
        author: author.value,
        description: description.value,
        year: year.value,
        imgUrl: imgUrl.value,
      };
  
      setNewBook([...newBook, myBook]);
    }

    function Logout() {
      localStorage.removeItem('user')
      window.location.reload()
    }

  return (
    <>
        <button className="ButtonSair" onClick={Logout}>Sair</button>

        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nome do livro" />
            <input type="text" name="author" placeholder="Autor" />
            <input type="text" name="description" placeholder="Descrição" />
            <input type="text" name="year" placeholder="Ano de lançamento" />
            <input type="text" name="imgUrl" placeholder="Url da imagem" />

            <button type="submit">Cadastra</button>
        </form>

        <div className="Conteiner">

        {newBook.map((book) => (
            <ul className="list" key={book.imgUrl}>
                <li>
                    <img className="capalivro" src={book.imgUrl} alt="Capa do Livro" /></li>
                <li>{book.name}</li>
                <li>{book.author}</li>
                <li>{book.description}</li>
                <li>{book.year}</li>
            </ul>
            ))}
        </div>                
    </>
  );
}

