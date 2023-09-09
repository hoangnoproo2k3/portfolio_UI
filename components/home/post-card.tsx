import { Post } from '@/models'
import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { format } from 'date-fns'
export interface PostCardProps {
	post: Post
}

export const PostCart = ({ post }: PostCardProps) => {
	if (!post) return null
	return (
		<Card>
			<CardContent>
				<Typography variant={'h5'} sx={{ fontWeight: 'bold' }}>
					{post.title}
				</Typography>
				<Typography variant={'body1'} my={2} sx={{ display: 'flex' }}>
					{format(Number(post.publishedDate), 'dd MMM yyy')}
					<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
					{post.tagList.join(', ')}
				</Typography>
				<Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '23.5px' }}>
					{post.description}
				</Typography>
			</CardContent>
		</Card>
	)
}
