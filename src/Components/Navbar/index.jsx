import { Link } from 'react-scroll';
import { Text, HStack } from '@chakra-ui/react';
import DownloadCV from '../DownloadCV';
import { navbarStyles as sx } from './Navbar.styles';

export const Navbar = () => {
  return (
    <HStack data-testid='navbar' sx={sx.container}>
      <HStack sx={sx.wrap} spacing={{ base: '5', lg: '10' }}>
        <Link href='/' to='home' spy={true} smooth={true} offset={0} duration={500}>
          <Text sx={sx.link}>Home</Text>
        </Link>
        <Link
          to='experience'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href='/'
        >
          <Text sx={sx.link}>Experience</Text>
        </Link>
        <Link href='/' to='mystack' spy={true} smooth={true} offset={0} duration={500}>
          <Text sx={sx.link}>Tech Stack</Text>
        </Link>
        <Link href='/' to='projects' spy={true} smooth={true} offset={0} duration={500}>
          <Text sx={sx.link}>Projects</Text>
        </Link>
      </HStack>
      
      <DownloadCV />
    </HStack>
  );
};
