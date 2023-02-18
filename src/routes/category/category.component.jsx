import { useContext, useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCart from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <Fragment>
            <h2 className="category-title">{category.toLocaleUpperCase()}</h2>

            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCart
                            key={product.id}
                            product={product}
                        ></ProductCart>
                    ))}
            </div>
        </Fragment>
    );
};

export default Category;
