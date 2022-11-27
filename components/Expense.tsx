import styles from '../styles/Expense.module.scss'
	
type Wrapper = {
	category: string
	money: number
}

function Expense({category, money}: Wrapper) {
	return (
		<div className={styles.expense}>
			<div className={styles.category}>
				<p>{category}</p>
			</div>
			<div className={styles.money}>
				<div>
					<p>{money}</p>
					O
				</div>
			</div>
		</div>
	)
}

export default Expense
