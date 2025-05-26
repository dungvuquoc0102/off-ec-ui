import { useGetAllProductsQuery } from "@/services/productApi";
import styles from "./ProductList.module.scss";
import { Link } from "react-router-dom";
import config from "@/config";

function ProductList() {
  const { isLoading, error, data } = useGetAllProductsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const productList = data.data.items;
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <ul>
          {productList.map((item) => (
            <li key={item.id}>
              <Link to={`${config.routes.products}/${item.slug}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
