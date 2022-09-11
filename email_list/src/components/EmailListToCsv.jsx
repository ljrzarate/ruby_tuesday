import { useState } from "react";
import { useContext } from "react";
import { EmailContext } from "../contexts/EmailProvider";

const EmailListToCsv = () => {
	const { emails } = useContext(EmailContext);
	const [formatedEmails, setFormatedEmails] = useState("");

	const onClick = (e) => {
		e.preventDefault();
		const emailData = emails.slice();
		const csv = emailData.toString();
		setFormatedEmails(csv);
	};

	return (
		<>
			<button className='primary-button big' onClick={onClick}>
				{" "}
				Show CSV format{" "}
			</button>
			<code>{formatedEmails}</code>
		</>
	);
};

export default EmailListToCsv;
