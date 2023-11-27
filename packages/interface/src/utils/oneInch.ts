export interface OneInchToken {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
}

export interface OneInchProtocol {
  name: string;
  part: number;
  fromTokenAddress: string;
  toTokenAddress: string;
}

export interface OneInchQuote {
  estimatedGas: number;
  fromToken: OneInchToken;
  toToken: OneInchToken;
  protocols: OneInchProtocol[][][];
  toTokenAmount: string;
  fromTokenAmount: string;
}

export interface OneInchTransaction {
  from: string;
  to: string;
  data: string;
  value: string;
  gasPrice: string;
  gas: number;
}

export interface OneInchSwap {
  fromToken: OneInchToken;
  toToken: OneInchToken;
  toTokenAmount: string;
  fromTokenAmount: string;
  protocols: OneInchProtocol[][][];
  tx: OneInchTransaction;
}

export function fetchQuoteURL(
  chainId: number,
  fromTokenAddress: string,
  toTokenAddress: string,
  amount: string
): string {
  return `https://api.1inch.dev/swap/v5.2/${chainId}/quote?src=${fromTokenAddress}&dst=${toTokenAddress}&amount=${amount}`;
}

export function fetchSwapURL(
  chainId: number,
  fromTokenAddress: string,
  toTokenAddress: string,
  fromAddress: string,
  amount: string,
  slippage: string
): string {
  return `https://api.1inch.dev/swap/v5.2/${chainId}/swap?src=${fromTokenAddress}&dst=${toTokenAddress}&amount=${amount}&from=${fromAddress}&slippage=${slippage}&disableEstimate=true&allowPartialFill=false`;
}
