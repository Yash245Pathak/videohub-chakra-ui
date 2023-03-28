import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <Container maxW={'container.xl'} h={'110vh'} p={'10'}>
            <form>
                <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'} textAlign={'center'}>
                    <Heading>Video Hub</Heading>
                    <Avatar alignSelf={'center'} boxSize={'32'} />
                    <Input placeholder='Name' type={'name'} required focusBorderColor={'purple.500'} />
                    <Input placeholder='Email' type={'email'} required focusBorderColor={'purple.500'} />
                    <Input placeholder='Password' type={'password'} required focusBorderColor={'purple.500'} />
                    <Button variant={'solid'} colorScheme={'purple'}>SignUp</Button>
                    <Text alignSelf={'flex-end'}  fontWeight={'light'}><Link to={'/login'}>Already A User</Link></Text>
                </VStack>
            </form>
        </Container >
    )
}

export default Signup
