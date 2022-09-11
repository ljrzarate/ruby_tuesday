import { useContext } from "react";
import { EmailContext } from "../contexts/EmailProvider";
import SingleEmail from "./SingleEmail";

const EmailList = () => {
	const { emails } = useContext(EmailContext);

	return (
		<>
			<h1> Emails</h1>
			<table>
				<tbody>
					<tr>
						<td>email</td>
						<td>action</td>
					</tr>
					{emails.map((email, index) => (
						<SingleEmail key={index} email={email} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default EmailList;
