import Expense from './Expense'
import styles from '../styles/ExpenseList.module.scss'

type Wrapper = {
	expenses: [{
		category: string
		money: number
	}]
}

function ExpenseList({expenses}: Wrapper) {
	return (
		<section>
			<h2 className={styles.month}>January</h2>
			<ul className={styles.expenseList}>
				{expenses.map(expense => (
					<li><Expense category={expense.category} money={expense.money}/></li>
				))}
			</ul>
		</section>
	)
}

export default ExpenseList
