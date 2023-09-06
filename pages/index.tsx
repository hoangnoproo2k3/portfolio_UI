import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
	const router = useRouter()
	function goToDetailPage() {
		router.push({
			pathname: '/posts/[postId]',
			query: {
				postId: 123,
				ref: 'social',
			},
		})
	}
	return (
		<div className={styles.container}>
			<Head>
				<title>Learn NextJS | Easy Frontend</title>
				<meta name="description" content="Learn NextJS + Typescript with fun :P" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>Test 2</div>
		</div>
	)
}

Home.Layout = MainLayout

export default Home
