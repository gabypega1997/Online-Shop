import { Link } from "react-router-dom";
import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from "./directory-item.style.jsx";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <DirectoryItemContainer
            to={`shop/${title}`}
            className="directory-body-container "
        >
            <BackgroundImage
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <Body className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
