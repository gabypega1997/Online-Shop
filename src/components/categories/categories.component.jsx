import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";

//Take data form json file
const categories = require("../../data/categories.json");

const Categories = () => {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return <CategoryItem category={category} key={category.id} />;
            })}
        </div>
    );
};

export default Categories;
