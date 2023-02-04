import Categories from "./components/categories/categories.component";

const categories = require("./data/categories.json");

const App = () => {
    return <Categories categories={categories} />;
};

export default App;
