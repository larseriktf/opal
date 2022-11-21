type Wrapper = {
	category: string
	opals: number
}

function Expense({category, opals}: Wrapper) {
	return (
		<div>
			<span>{category}</span>
			<span>{opals}</span>
			<span>OPALS</span>
		</div>
	)
}

export default Expense
