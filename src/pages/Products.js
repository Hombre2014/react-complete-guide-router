import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const navigateToProductDetail = (productId) => {
    navigate(`/products/${productId}`);
  }

  return (
    <div>
      <h1>The Products Page</h1>
      <ul>
        <li><Link onClick={() => navigateToProductDetail(1)} to='/products/1'>A Book</Link></li>
        <li><Link onClick={() => navigateToProductDetail(2)} to='/products/2'>A Carpet</Link></li>
        <li><Link onClick={() => navigateToProductDetail(3)} to='/products/3'>A Camera</Link></li>
      </ul>
    </div>
  )
}

export default Products;
