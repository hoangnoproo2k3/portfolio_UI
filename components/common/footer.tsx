import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material'
import { Icon, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import * as React from 'react'

export function Footer() {
	const socialLinks = [
		{
			icon: Facebook,
			url: '',
		},
		{
			icon: Instagram,
			url: '',
		},
		{
			icon: Twitter,
			url: '',
		},
		{
			icon: LinkedIn,
			url: '',
		},
	]
	return (
		<Box component="footer" py={2} textAlign="center">
			<Stack direction={'row'} justifyContent={'center'}>
				{socialLinks.map((item, index) => (
					<Link
						key={index}
						href={item.url}
						style={{ padding: '12px' }}
						target="_blank"
						// ref={'noopener noreferrer'}
					>
						<Icon component={item.icon} sx={{ fontSize: '48px' }} />
					</Link>
				))}
			</Stack>
			<Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
		</Box>
	)
}
