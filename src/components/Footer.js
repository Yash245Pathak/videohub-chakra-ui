import { Box, Button, Heading, HStack, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

function Footer() {
    return (
        <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.800'} minH={'36'} p={'12'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>Subscribe to our channel</Heading>
                    <HStack borderBottom={'2px solid purple'} py={'2'}>
                        <Input placeholder='Enter your email here...' border={'none'} outline={'none'} borderRadius={'none'} focusBorderColor={'none'} ></Input>
                        <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend size={18} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                    <Heading textTransform={'uppercase'} size={'lg'}>Video hub</Heading>
                    <Heading size={'xs'} fontWeight={'hairline'} textTransform={'uppercase'} >All rights Reserved</Heading>
                </VStack>
                <VStack w={'full'}>
                    <Heading textTransform={'uppercase'} size={'lg'} >Social Media</Heading>
                    <Button variant={'link'} colorScheme={'white'} fontWeight={'hairline'}>
                        <a target={'blank'} href='https://www.youtube.com/'>YouTube</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'} fontWeight={'hairline'}>
                        <a target={'blank'} href='https://www.linkedin.com/in/yash-pathak-10a6031b6/'>LinkedIn</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'} fontWeight={'hairline'}>
                        <a target={'blank'} href='https://github.com/Yash245Pathak'>GitHub</a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
