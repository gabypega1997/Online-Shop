import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
const MyAccount = () => {
    const user = useSelector(selectCurrentUser);
    console.log(user);
    return (
        <div>
            <h1>MY ACCOUNT</h1>
            <h2>Hallo {user.displayName}</h2>
        </div>
    );
};

export default MyAccount;
