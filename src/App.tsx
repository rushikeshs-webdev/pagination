import "./styles.css";
import { useState, useEffect } from "react";

function ProductCard({image, title}) {
  return (                          
                <div className="card">
                  <div className="img">
                    <img src={image} alt={title} />
                  </div>
                  <div className="title">
                    <b>{title}</b>
                  </div>
                </div>                          
            )
}

export default function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const noOfPages = Math.ceil(products.length / 10)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
    .then((res) => res.json())
    .then((data) => setProducts(data.products))
  }, [])



  <div>No Products found</div>) :
    (
    <div className="App">
      <h1>Pagination</h1>
      <div className="container">
      
      {products.filter(val => (val.id > currentPage*10 - 10 && val.id <= currentPage*10)).map((product, i) => (
        <ProductCard key={i} image={product.thumbnail} title={product.title}/>
      ))}
      </div>
      <div className="pages">
          <span className="prev-btn" onClick={() => {setCurrentPage(currentPage !== 1? currentPage - 1 : 1)}}>⬅️</span>
          {
          Array(noOfPages).fill(0).map((_, i) => {
                  return (
                    <div key={i} onClick={() => setCurrentPage(i + 1)}  className={currentPage === i+1 ? "active" : 'non-active'}>
                      {i + 1}
                    </div>
                  )})
          }
           <span className="next-btn" onClick={() => {setCurrentPage(currentPage !== noOfPages? currentPage + 1 : noOfPages)}}>➡️</span>
        </div>    
    </div>
    )
  
}
