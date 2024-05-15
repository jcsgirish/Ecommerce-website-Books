

import'./SearchInputCard.styles.css'
import { Link } from 'react-router-dom'

const SearchInputCard=({BookData})=>{
    
    return(
        <section className="Cart-section">
        <div className="Cart-container">

         

            <div className='cart-item'>
                <div className='cart-item-img'>
                    <img src={BookData.book_url} alt='cart-img-item'/>
                </div>
                <div className='cart-item-content'>
                    <h3>{BookData.book_name }</h3>
                    <p>{BookData.author_name}</p>
                    <p className='cart-price'> &#8377; {BookData.price}</p>
                    <br></br>
                  
                    <Link to={`/Details/${BookData.id}`} className='SearchInputbtn'>BookDetails</Link>
            
                </div>
            </div>

        </div>

    </section>
      
    )
}

export default SearchInputCard