import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '10%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
}


function Home() {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'50vh'}>
                <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'1px solid black'} m={'auto'}>Services</Heading>
                <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>
                    <Image src={img5} h={['40', '300']} filter={'hue-rotate(-130deg)'} />
                    <Text p={['4', '16']} lineHeight={['120%', '190%']} letterSpacing={'wider'} textAlign={'start'}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus repellendus, accusamus omnis dolores assumenda, modi quia nam molestias perferendis praesentium pariatur sint numquam illum minus velit nostrum iste? Maiores, sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi dolore deserunt repellat facilis unde natus voluptatum vero libero tempora eligendi sint incidunt non aperiam impedit assumenda, odit doloremque porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur porro aliquid doloremque iste vel inventore pariatur nihil magnam, eveniet aliquam earum repellendus cum dolor! Ratione est maxime natus.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => {
    return <Carousel autoPlay infiniteLoop interval={2000} showArrows={false} showThumbs={false} showStatus={false}>
        <Box w={'full'} h={['50vh', '110vh']}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} size={['sm', '2xl']} color={'white'} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w={'full'} h={['50vh', '110vh']}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.600'} size={['sm', '2xl']} color={'black'} {...headingOptions}>Future is gaming</Heading>
        </Box>
        <Box w={'full'} h={['50vh', '110vh']}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} size={['sm', '2xl']} color={'black'} {...headingOptions}>Gaming on console</Heading>
        </Box>
        <Box w={'full'} h={['50vh', '110vh']}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} size={['sm', '2xl']} color={'black'} {...headingOptions}>Night life is cool</Heading>
        </Box>
    </Carousel>
}

export default Home
