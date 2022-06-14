import './App.css';
import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
  useDisclosure
} from "@chakra-ui/react";
import './maquina.jpg'
import Navbar from './components/Navbar';
import Carrousel from './components/Carrouesel';
import Hero from './components/Hero';

function App() {

    const mobileNav = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");
  
    return (
      <div>
      <chakra.header>
          <Navbar />
          <Carrousel />
      </chakra.header>
      <Hero />
      </div>
  );
}

export default App;


