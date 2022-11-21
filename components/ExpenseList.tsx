import Expense from './Expense'

type Wrapper = {
	expenses: [{
		category: string
		opals: number
	}]
}

function ExpenseList({expenses}: Wrapper) {
	return (
		<section>
			<ul>
				{expenses.map(expense => (
					<li><Expense category={expense.category} opals={expense.opals}/></li>
				))}
			</ul>
		</section>
	)
}

export default ExpenseList
