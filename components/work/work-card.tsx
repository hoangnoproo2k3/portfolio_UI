'use client'
import { Work } from '@/models'
import { Box, Chip, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

export interface IWorkCardProps {
	work: Work
}

export function WorkCard({ work }: IWorkCardProps) {
	return (
		<Stack direction={{ sx: 'column', md: 'row' }} spacing={2}>
			<Box width={{ sx: '100%', md: '246' }} flexShrink={0}>
				<Image
					src={work.thumbnailUrl}
					width={246}
					height={180}
					layout="responsive"
					alt="Work thumbnail"
				/>
			</Box>
			<Box>
				<Typography variant="h4" fontWeight="bold">
					{work.title}
				</Typography>
				<Stack direction={'row'} my={1.5}>
					<Chip
						color="secondary"
						label={new Date(Number.parseInt(work.createdAt)).getFullYear()}
						size="small"
					></Chip>
					<Typography ml={3} color={'GrayText'}>
						{work.tagList.join(', ')}
					</Typography>
				</Stack>
				<Typography>{work.shortDescription}</Typography>
			</Box>
		</Stack>
	)
}
