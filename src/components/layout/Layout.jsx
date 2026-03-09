import { Box, Flex } from "@chakra-ui/react";
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({children}) {
  return (
    <Box>
      <Navbar/>
      <Flex>
        <Sidebar/>
        <Box flex="1" p="6">
          {children}
        </Box>
      </Flex>

    </Box>
  )
}

export default Layout;