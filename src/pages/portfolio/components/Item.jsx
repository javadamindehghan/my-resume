import P from '../../../img/portfolio/1.jpg'
import P1 from '../../../img/portfolio/4.jpg'


export default function Item({children}) {
    return (
      <>
      <a href='#'>
      <div className="item-img" >
        <div className='after'></div>
        <p>quizapp</p>

         {children}
      </div>
      </a>
      </>


    )
}
