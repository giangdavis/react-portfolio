import "./App.css";
import {
  ChakraProvider,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Flex,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";

function App() {
  return (
    <ChakraProvider>
      <Flex justifyContent="center" mt="5">
        <Breadcrumb separator={<MinusIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#About">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#Experience">Experience</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#Work">Work</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#Contact">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
