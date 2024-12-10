import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const books = [
    { id: 1, title: "Book Title 1", author: "Author 1", price: 10.0 },
    { id: 2, title: "Book Title 2", author: "Author 2", price: 12.0 },
    { id: 3, title: "Book Title 3", author: "Author 3", price: 15.0 },
  ];

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Online Bookstore</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="book-list">
          <h2>Featured Books</h2>
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price.toFixed(2)}</p>
              <button onClick={() => addToCart(book)}>Add to Cart</button>
            </div>
          ))}
        </section>

        <section className="cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.title} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Online Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
