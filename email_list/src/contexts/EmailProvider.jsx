import { useState } from "react";
import { createContext } from "react";

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
	const [emails, setEmails] = useState([]);

	const addEmailToList = (newEmail) => {
		newEmail = newEmail.toLowerCase();
		const emailList = emails.slice();
		if (!emailList.includes(newEmail)) {
			emailList.push(newEmail);
			setEmails(emailList);
		} else {
			alert("email in list");
		}
	};

	const value = {
		emails,
		setEmails,
		addEmailToList,
	};

	return (
		<EmailContext.Provider value={value}>{children}</EmailContext.Provider>
	);
};
