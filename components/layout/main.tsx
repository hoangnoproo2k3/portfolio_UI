import { LayoutProps } from '@/models/index'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Box, Stack } from '@mui/material'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('MainLayout mounting')
		return () => console.log('MainLayout unmounting')
	}, [])

	return (
		<Stack minHeight="100vh">
			<Header />
			<Box component="main" flexGrow={1}>
				{children}
				<Link href="/">Home</Link>
				<Link href="/blog">Blog</Link>
				<Link href="/works">Works</Link>
			</Box>
			<Footer />
		</Stack>
	)
}
