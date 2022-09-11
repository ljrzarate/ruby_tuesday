import { useState } from "react";
import { useContext } from "react";
import { EmailContext } from "../contexts/EmailProvider";

const AddEmail = () => {
	const { addEmailToList } = useContext(EmailContext);
	const [emailValue, setEmailValue] = useState("");
	const [error, setError] = useState(null);

	const handleChangeInput = (e) => {
		e.preventDefault();
		const value = e.target.value;
		if (!isValidEmail(value)) {
			setError("invalid email");
		} else {
			setError(null);
		}
		setEmailValue(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!error) {
			addEmailToList(emailValue);
			setEmailValue("");
		}
	};

	const isValidEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='container'>
					<input
						onChange={(e) => handleChangeInput(e)}
						type={"text"}
						placeholder={"add your email"}
						value={emailValue}
					/>
					<button className='primary-button'>Add</button>
				</div>
			</form>
			{error && <h3> {error} </h3>}
		</>
	);
};

export default AddEmail;
