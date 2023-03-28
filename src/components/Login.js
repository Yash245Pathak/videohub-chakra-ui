import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <Container maxW={'container.xl'} h={'90vh'} p={'10'}>
            <form>
                <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'} textAlign={'center'}>
                    <Heading>Welcome Back</Heading>
                    <Input placeholder='Email' type={'email'} required focusBorderColor={'purple.500'} />
                    <Input placeholder='Password' type={'password'} required focusBorderColor={'purple.500'} />
                    <Button variant={'ghost'} alignSelf={'flex-end'} fontWeight={'light'} ><Link to={'/foregotpass'}>Forget Password</Link></Button>
                    <Button variant={'solid'} colorScheme={'purple'}>Login</Button>
                    <Text alignSelf={'flex-end'}  fontWeight={'light'}><Link to={'/signup'}>New User</Link></Text>
                </VStack>
            </form>
        </Container >
    )
}

export default Login
