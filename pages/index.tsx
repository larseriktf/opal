import Head from 'next/head'
import Layout from '../components/Layout'
import Overview from '../components/Overview'
import Expense from '../components/Expense'
import ExpenseList from '../components/ExpenseList'

export default function Home() {
	let expenses = [
		{ category: ":D", money: 31245 },
		{ category: "B)", money: 83285 },
		{ category: ":/", money: 32135 },
		{ category: "xD", money: 94125 },
		{ category: ":P", money: 31245 },
		{ category: ":O", money: 312 },
	]

  return (
		<>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Layout>
				<Overview/>
				<ExpenseList expenses={expenses}/>
			</Layout>
		</>
  )
}
