import { ReactNode } from 'react'
import { Box } from '@mui/material'

type Props = {
  children?: ReactNode
}

const Section = ({ children }: Props) => (
  <Box paddingY={8}>
    {children}
  </Box>
)

export default Section;
