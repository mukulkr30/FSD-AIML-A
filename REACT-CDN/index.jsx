function Book(book){
     return (
          <div>
               <img src = {book.image} width = "200" height = "200" alt="Book Image" />
               <h3>Title: {book.title}</h3>
               <h3>Price: {book.price}</h3>
          </div>
     )
}

const books = [{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJC6hzuCO-632Du8C4TZmhEbkFdyI7HfPZw&s', title: 'Phy', Price: '$2.49'},{
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJC6hzuCO-632Du8C4TZmhEbkFdyI7HfPZw&s', title: 'Phy', Price: '$2.49'
},{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJC6hzuCO-632Du8C4TZmhEbkFdyI7HfPZw&s', title: 'Phy', Price: '$2.49'}]

function App(){
     return (
          <div className="booklist">
               {books.map((b, i)=>(
                    <Book key={i} book={b} />
               ))}
          </div>
     )
}

const parent = document.getElementById('root');
const root = ReactDOM.createRoot('parent');
root.render(<App/>)