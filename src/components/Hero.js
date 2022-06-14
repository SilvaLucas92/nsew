import { Box, Heading, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
    return (
        <Stack
        direction={{base: 'column', md:'row'}}
        >
            <Box>
                <Heading>
                    Quienes Somos
                </Heading>
                <Text>
                You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process
                </Text>
            </Box>
            <Box>
                <Image
                src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                />
            </Box>
        </Stack>
    )
}

export default Hero