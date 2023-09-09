import { Work } from '@/models'
import { Box, Divider } from '@mui/material'
import { Fragment } from 'react'
import { WorkCard } from '.'
export interface WorkListProps {
	workList: Work[]
}
export const WorkList = ({ workList }: WorkListProps) => {
	if (workList.length === 0) return null
	return (
		<Box>
			{workList.map((work) => (
				<Fragment key={work.id}>
					<WorkCard work={work} />
					<Divider sx={{ my: 2.5 }} />
				</Fragment>
			))}
		</Box>
	)
}
