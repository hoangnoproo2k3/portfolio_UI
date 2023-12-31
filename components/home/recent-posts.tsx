import { Box, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { PostCart } from './post-card'
import { Post } from '@/models'

export const RecentPosts = () => {
	// Call api post
	const postList: Post[] = [
		{
			id: 1,
			title: 'Making a design system from scratch',
			publishedDate: '1694272977816',
			tagList: ['Design', 'Pattern'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
		{
			id: 2,
			title: 'Creating pixel perfect icons in Figma',
			publishedDate: '1694272977816',
			tagList: ['Figma', 'Icon Design'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
	]
	return (
		<Box component={'section'} bgcolor={'secondary.light'} pt={2} pb={4}>
			<Container>
				<Stack
					direction={'row'}
					mb={2}
					justifyContent={{ xs: 'center', md: 'space-between' }}
					alignItems={'center'}
				>
					<Typography variant="h5">Recent Posts</Typography>
					<Link href={'/blog'}>
						<Box component={'span'} sx={{ display: { xs: 'none', md: 'inline-block' } }}>
							View all
						</Box>
					</Link>
				</Stack>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					spacing={3}
					sx={{
						'& > div ': {
							width: {
								xs: '100%',
								md: '50%',
							},
						},
					}}
				>
					{postList.map((post) => (
						<Box key={post.id}>
							<PostCart post={post} />
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
