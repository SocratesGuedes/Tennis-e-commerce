import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

function Card(){
  return ( <>
  <section className="card">
  <img
    src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
    alt="Shoe"
    className="card-img"
  />
  <div className="card-details">
    <h3 className="card-details">Shoe</h3>
    <section className="card-reviews">
      <AiFillStar className="ratings-start" />
      <AiFillStar className="ratings-start" />
      <AiFillStar className="ratings-start" />
      <AiFillStar className="ratings-start" />
      <span className="total-reviews">4</span>
    </section>
    <section className="card-price">
      <div className="price">
        <del>R$ 300</del> 200
      </div>

      <div className="bag">
        <BsFillBagHeartFill />
      </div>
    </section>
  </div>
</section>

  </>
  )
}

export default Card;