import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex direction={"column"} h={"850px"} justifyContent={"center"} alignItems={"center"}>
        
        <Heading my={"40px"}>RealShare Tokens</Heading>
        
        <Box
          w="700px"
          h="800px"
          maxW="100%"
          overflow="hidden"
          borderRadius="20px" // This adds rounded corners. You can adjust the value as needed (e.g., "md", "lg", "xl", or a specific px/em value).
          shadow="2xl" // This adds a shadow. Chakra UI provides multiple shadow sizes ("sm", "md", "lg", "xl", "2xl").
          >
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc20.html?contract=0x189591bdFFdBAdD188CE9e846d25132F5DCd16e9&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=5504ef9aee90529263ac6a2f0aad404c&theme=dark&primaryColor=green"
            width="700px"
            height="800px"
            style={{ maxWidth: "100%" }}
            frameBorder="0"
          ></iframe>
        </Box>
        
      </Flex>
    </Container>
  );
};

export default Home;
