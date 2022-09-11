import { useContext } from "react";
import { EmailContext } from "../contexts/EmailProvider";

const SingleEmail = ({ email }) => {
	const { emails, setEmails } = useContext(EmailContext);

	const onClick = (e) => {
		const emailList = emails.slice();
		const index = emailList.indexOf(email);
		if (index > -1) {
			emailList.splice(index, 1);
		}
		setEmails(emailList);
	};

	return (
		<>
			<tr>
				<td>{email}</td>
				<td>
					<button onClick={onClick}>Delete</button>
				</td>
			</tr>
		</>
	);
};

export default SingleEmail;
