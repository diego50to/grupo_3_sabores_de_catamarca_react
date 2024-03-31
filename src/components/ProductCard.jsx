/* eslint-disable react/prop-types */
import { BeatLoader } from "react-spinners";
import { useGetData } from "../../hooks/useGetData";

function ProductCard(props) {
  const { data, isLoading, error } = useGetData(
    `http://localhost:3000/api/products/${props.id}`
  );

  const product = data.data;
  if (isLoading)
    return (
      <div className="card">
        <BeatLoader color="f86e31" />
      </div>
    );
  if (error)
    return (
      <div className="card">
        <p>{error}</p>
      </div>
    );
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <section className="detail container">
        <div className="description-detail">
          <h3>{product.name}</h3>
          <div className="price">{`Precio: $${product.price}`}</div>
        </div>
        <div className="img-detail">
          <img
            src={`http://localhost:3000/images/${product.image}`}
            alt={product.name}
          />
        </div>
      </section>
      <h4>Detalles del producto</h4>
      <p>{product.description}</p>
      <p>{`Peso: ${product.weight} Grs.`}</p>
      <p>{`Categoria: ${product.category}`}</p>
    </div>
  );
}

export default ProductCard;
