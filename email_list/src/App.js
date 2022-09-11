import "./App.css";
import AddEmail from "./components/AddEmail";
import EmailList from "./components/EmailList";
import EmailListToCsv from "./components/EmailListToCsv";
import { EmailProvider } from "./contexts/EmailProvider";

function App() {
	return (
		<div className='App'>
			<body>
				<EmailProvider>
					<AddEmail />
					<EmailList />
					<EmailListToCsv />
				</EmailProvider>
			</body>
		</div>
	);
}

export default App;
