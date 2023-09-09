import { Post } from '@/models'
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'
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
				<Stack direction={'row'} my={2}>
					<Typography>{format(Number(post.publishedDate), 'dd MMM yyy')}</Typography>
					<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
					<Typography>{post.tagList.join(', ')}</Typography>
				</Stack>
				<Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '23.5px' }}>
					{post.description}
				</Typography>
			</CardContent>
		</Card>
	)
}
