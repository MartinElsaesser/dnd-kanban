import { Kanban } from './components';

export default function App() {
	const items = {
		A: ["A1", "A2", "A3", "A4", "A5"],
		B: ["B1", "B2", "B3", "B4"],
		C: ["C1", "C2", "C3", "C4"],
	}
	return <Kanban items={items} />
}
