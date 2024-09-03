import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props) {
  //2.function
  function saveProduct(product) {
    console.log('i am inside new product');
    console.log(product);

    //calling parent function
    //onSaveProduct--> saveProduct--> printProduct prop call
    props.printProduct(product);
  }

  return (
    <div className="new-product">
      {/* 2.function pass on ProductForm */}
      <ProductForm onSaveProduct={saveProduct}></ProductForm>
    </div>
  );
}
export default NewProduct;
