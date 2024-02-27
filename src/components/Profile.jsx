import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
	const { user } = useContext(UserContext);
	return (
		<>
			{user && (
				<>
					<div>User: {user?.username}</div>
					<div>Password: {user?.password}</div>
				</>
			)}
		</>
	);
}
export default Profile;
