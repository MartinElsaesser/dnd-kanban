import { Kanban } from './components';
import { createRange } from './utilities';

export default function App() {
	const itemCount = 3;
	const items = {
		A: createRange(itemCount, (index) => `A${index + 1}`),
		B: createRange(itemCount, (index) => `B${index + 1}`),
		C: createRange(itemCount, (index) => `C${index + 1}`),
		D: createRange(itemCount, (index) => `D${index + 1}`),
	}
	return <Kanban items={items} />
}
