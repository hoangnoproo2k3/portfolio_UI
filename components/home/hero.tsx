import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

export interface IHeroSectionProps {}

export function HeroSection(props: IHeroSectionProps) {
	return (
		<Box component="section" pt={{ xs: 4, md: 16 }} pb={{ xs: 6, md: 8 }}>
			<Container>
				<Stack
					direction={{ xs: 'column-reverse', md: 'row' }}
					alignItems={{ xs: 'center', md: 'flex-start' }}
					textAlign={{ xs: 'center', md: 'left' }}
					spacing={8}
				>
					<Box>
						<Typography component="h1" variant="h3" fontWeight={'bold'} mb={{ xs: 3, md: 5 }}>
							Hi, I am John, <br />
							Creative Technologist
						</Typography>
						<Typography mb={{ xs: 3, md: 5 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet.
						</Typography>
						<Button variant="contained" size="large">
							Download Resume
						</Button>
					</Box>
					<Box
						sx={{
							padding: 0,
							minWidth: '240px',
							minHeight: '240px',
							boxShadow: '-5px 13px',
							color: 'secondary.light',
							borderRadius: '50%',
						}}
					>
						<Image src="/images/Ellipse-1.png" alt="" layout="" width={240} height={240} />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
// Section -> container -> flex container( stack) -> flex-item (trái, phải)
