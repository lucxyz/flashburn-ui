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

interface IVirtualSynthInterface extends ethers.utils.Interface {
  functions: {
    "balanceOfUnderlying(address)": FunctionFragment;
    "rate()": FunctionFragment;
    "readyToSettle()": FunctionFragment;
    "secsLeftInWaitingPeriod()": FunctionFragment;
    "settle(address)": FunctionFragment;
    "settled()": FunctionFragment;
    "synth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOfUnderlying",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "readyToSettle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "secsLeftInWaitingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "settle", values: [string]): string;
  encodeFunctionData(functionFragment: "settled", values?: undefined): string;
  encodeFunctionData(functionFragment: "synth", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "balanceOfUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readyToSettle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "secsLeftInWaitingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settled", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "synth", data: BytesLike): Result;

  events: {};
}

export class IVirtualSynth extends BaseContract {
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

  interface: IVirtualSynthInterface;

  functions: {
    balanceOfUnderlying(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    readyToSettle(overrides?: CallOverrides): Promise<[boolean]>;

    secsLeftInWaitingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    settle(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settled(overrides?: CallOverrides): Promise<[boolean]>;

    synth(overrides?: CallOverrides): Promise<[string]>;
  };

  balanceOfUnderlying(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  readyToSettle(overrides?: CallOverrides): Promise<boolean>;

  secsLeftInWaitingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  settle(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settled(overrides?: CallOverrides): Promise<boolean>;

  synth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    balanceOfUnderlying(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    readyToSettle(overrides?: CallOverrides): Promise<boolean>;

    secsLeftInWaitingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    settle(account: string, overrides?: CallOverrides): Promise<void>;

    settled(overrides?: CallOverrides): Promise<boolean>;

    synth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    balanceOfUnderlying(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    readyToSettle(overrides?: CallOverrides): Promise<BigNumber>;

    secsLeftInWaitingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    settle(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settled(overrides?: CallOverrides): Promise<BigNumber>;

    synth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOfUnderlying(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readyToSettle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    secsLeftInWaitingPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    settle(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    synth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
