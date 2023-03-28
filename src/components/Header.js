import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'

function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                pos={'fixed'}
                zIndex={'overlay'}
                top={'2'}
                left={'2'}
                colorScheme={'purple'}
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                onClick={onOpen} >
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                        <VStack align={'flex-start'}>
                            <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                                <Link to={'/'}>HOME</Link>
                            </Button>

                            <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                                <Link to={'/video'}>Videos</Link>
                            </Button>

                            <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                                <Link to={'/video?cat=free'}>Free Videos</Link>
                            </Button>

                            <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                                <Link to={'/upload'}>Upload Videos</Link>
                            </Button>
                        </VStack>
                        <HStack pos={'absolute'} bottom={'5'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                            <Button onClick={onClose} colorScheme={'purple'}>
                                <Link to={'/login'}>Log In</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                                <Link to={'/signup'}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </>
    )
}

export default Header
