import { Container, Stack, Text, Box, Link } from "@chakra-ui/react";
import { addresses } from "../../../constants";
import useWeb3React from "../../hooks/useWeb3React";

function Footer(): JSX.Element {
  const { chainId } = useWeb3React();
  const etherscanContractAddress: string =
    chainId in addresses
      ? `${addresses[chainId].explorer}address/${addresses[chainId].snxFlashTool}`
      : `${addresses[1].explorer}address/${addresses[1].snxFlashTool}`;

  return (
    <Container
      as={Stack}
      maxW={"6xl"}
      paddingBottom={4}
      paddingTop={{ base: 4, md: 4 }}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <Box>
        Sponsored by{" "}
        <Link href="https://twitter.com/snxgrants" isExternal>
          <Text as="u">grantsDAO</Text>
        </Link>
      </Box>
      <Box>
        <Link href="https://github.com/snxgrants/flashburn" isExternal>
          <Text as="u">GitHub</Text>
        </Link>{" "}
        •{" "}
        <Link href={etherscanContractAddress} isExternal>
          <Text as="u">Etherscan</Text>
        </Link>{" "}
        • By{" "}
        <Link href="https://twitter.com/GauthamGE" isExternal>
          <Text as="u">@GauthamGE</Text>
        </Link>
      </Box>
    </Container>
  );
}

export default Footer;
