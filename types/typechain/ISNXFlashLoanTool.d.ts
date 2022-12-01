/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ISNXFlashLoanToolInterface extends ethers.utils.Interface {
  functions: {
    "approvedExchange()": FunctionFragment;
    "burn(uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approvedExchange",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "approvedExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;

  events: {
    "Burn(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
}

export class ISNXFlashLoanTool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ISNXFlashLoanToolInterface;

  functions: {
    approvedExchange(overrides?: CallOverrides): Promise<[string]>;

    burn(
      sUSDAmount: BigNumberish,
      snxAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approvedExchange(overrides?: CallOverrides): Promise<string>;

  burn(
    sUSDAmount: BigNumberish,
    snxAmount: BigNumberish,
    exchangeData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approvedExchange(overrides?: CallOverrides): Promise<string>;

    burn(
      sUSDAmount: BigNumberish,
      snxAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Burn(
      sender?: null,
      sUSDAmount?: null,
      snxAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { sender: string; sUSDAmount: BigNumber; snxAmount: BigNumber }
    >;
  };

  estimateGas: {
    approvedExchange(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      sUSDAmount: BigNumberish,
      snxAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approvedExchange(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      sUSDAmount: BigNumberish,
      snxAmount: BigNumberish,
      exchangeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
