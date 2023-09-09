import { Work } from '@/models'
import { Box, Container, Typography } from '@mui/material'
import { WorkList } from '../work'

export const FeatureWorks = () => {
	// Call api post
	const workList: Work[] = [
		{
			id: '1',
			title: 'Designing Dashboards',
			createdAt: '1694272977816',
			updatedAt: '1694272977816',
			tagList: ['Dashboard'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/ddz4sezj8/image/upload/v1694275660/next-ez/Rectangle_30_ro43tr.jpg',
		},
		{
			id: '2',
			title: 'Vibrant Portraits of 2020',
			createdAt: '1694272977816',
			updatedAt: '1694272977816',
			tagList: ['Typography'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',

			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/ddz4sezj8/image/upload/v1694275661/next-ez/Rectangle_32_zqoha7.jpg',
		},
		{
			id: '3',
			title: '36 Days of Malayalam type',
			createdAt: '1694272977816',
			updatedAt: '1694272977816',
			tagList: ['Typography'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',

			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/ddz4sezj8/image/upload/v1694275660/next-ez/Rectangle_34_i8ov9e.jpg',
		},
	]
	return (
		<Box component={'section'} pt={2} pb={4}>
			<Container>
				<Typography variant="h5" mb={3} mt={2}>
					Featured Works
				</Typography>
				<WorkList workList={workList} />
			</Container>
		</Box>
	)
}
