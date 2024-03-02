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
  src: string;
  dst: string;
}

export interface OneInchQuote {
  estimatedGas: number;
  srcToken: OneInchToken;
  dstToken: OneInchToken;
  protocols: OneInchProtocol[][][];
  dstAmount: string;
  amount: string;
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
  srcToken: OneInchToken;
  dstToken: OneInchToken;
  dstAmount: string;
  amount: string;
  protocols: OneInchProtocol[][][];
  tx: OneInchTransaction;
}

export function fetchQuoteURL(
  chainId: number,
  src: string,
  dst: string,
  amount: string
): string {
  return `/api/swap/v6.0/${chainId}/quote?src=${src}&dst=${dst}&amount=${amount}`;
}

export function fetchSwapURL(
  chainId: number,
  src: string,
  dst: string,
  from: string,
  amount: string,
  slippage: string
): string {
  return `/api/swap/v6.0/${chainId}/swap?src=${src}&dst=${dst}&amount=${amount}&from=${from}&slippage=${slippage}&disableEstimate=true`;
}
