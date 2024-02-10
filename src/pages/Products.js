import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to='/products/1'>A Book</Link></li>
        <li><Link to='/products/2'>A Carpet</Link></li>
        <li><Link to='/products/3'>A Camera</Link></li>
      </ul>
    </div>
  )
}

export default Products;
