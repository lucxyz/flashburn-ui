export const addresses: {
  [chainId: number]: {
    explorer: string;
    multicall: string;
    addressResolver: string;
    lendingPoolAddressesProvider: string;
    oneInch: string;
    snxFlashTool: string;
  };
} = {
  10: {
    explorer: "https://optimistic.etherscan.io/",
    multicall: "0xcA11bde05977b3631167028862bE2a173976CA11",
    addressResolver: "0x95A6a3f44a70172E7d50a9e28c85Dfd712756B8C",
    lendingPoolAddressesProvider: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
    oneInch: "0x1111111254760F7ab3F16433eea9304126DCd199",
    snxFlashTool: "0x8c3FFD1630beDde24d06b1931B54D45bACe0E226",
  },
  420: {
    explorer: "https://goerli-optimism.etherscan.io/",
    multicall: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    addressResolver: "0x1d551351613a28d676BaC1Af157799e201279198",
    lendingPoolAddressesProvider: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    oneInch: "0x1111111254760F7ab3F16433eea9304126DCd199",
    snxFlashTool: "0x96D2d1e49aF59b6bBD179713b99aB1D3e6410D16",
  },
  1: {
    explorer: "https://etherscan.io/",
    multicall: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    addressResolver: "0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83",
    lendingPoolAddressesProvider: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    oneInch: "0x11111112542D85B3EF69AE05771c2dCCff4fAa26",
    snxFlashTool: "0x96D2d1e49aF59b6bBD179713b99aB1D3e6410D16",
  },
  1337: {
    explorer: "https://etherscan.io/",
    multicall: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    addressResolver: "0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83",
    lendingPoolAddressesProvider: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    oneInch: "0x11111112542D85B3EF69AE05771c2dCCff4fAa26",
    snxFlashTool: "0x96D2d1e49aF59b6bBD179713b99aB1D3e6410D16",
  },
  42: {
    explorer: "https://kovan.etherscan.io/",
    multicall: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    addressResolver: "0x84f87E3636Aa9cC1080c07E6C61aDfDCc23c0db6",
    lendingPoolAddressesProvider: "0x88757f2f99175387ab4c6a4b3067c77a695b0349",
    oneInch: "0x11111112542D85B3EF69AE05771c2dCCff4fAa26",
    snxFlashTool: "0x231e7959852509E4872C3374554784a46EB8d680",
  },
};


