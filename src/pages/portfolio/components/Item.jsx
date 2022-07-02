import P from '../../../img/portfolio/1.jpg'
import P1 from '../../../img/portfolio/4.jpg'


export default function Item({children ,href,title}) {
    return (
      <>
      <a href={href}>
      <div className="item-img" >
        <div className='after'></div>
        <p>{title}</p>

         {children}
      </div>
      </a>
      </>


    )
}
