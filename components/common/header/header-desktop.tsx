import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
const HeaderDesktop = () => {
	const router = useRouter()
	return (
		<Box display={{ xs: 'none', md: 'block' }} py={2}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => (
						<Link key={route.path} href={route.path}>
							<Box
								component="span"
								sx={{ ml: 2, color: router.pathname === route.path ? 'red' : '' }}
							>
								{route.lable}
							</Box>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	)
}

export default HeaderDesktop
