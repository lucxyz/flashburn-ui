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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IAddressResolverInterface extends ethers.utils.Interface {
  functions: {
    "getAddress(bytes32)": FunctionFragment;
    "getSynth(bytes32)": FunctionFragment;
    "requireAndGetAddress(bytes32,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getSynth", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "requireAndGetAddress",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSynth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requireAndGetAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAddressResolver extends BaseContract {
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

  interface: IAddressResolverInterface;

  functions: {
    getAddress(name: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getSynth(key: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    requireAndGetAddress(
      name: BytesLike,
      reason: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  getAddress(name: BytesLike, overrides?: CallOverrides): Promise<string>;

  getSynth(key: BytesLike, overrides?: CallOverrides): Promise<string>;

  requireAndGetAddress(
    name: BytesLike,
    reason: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getAddress(name: BytesLike, overrides?: CallOverrides): Promise<string>;

    getSynth(key: BytesLike, overrides?: CallOverrides): Promise<string>;

    requireAndGetAddress(
      name: BytesLike,
      reason: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAddress(name: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getSynth(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    requireAndGetAddress(
      name: BytesLike,
      reason: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddress(
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSynth(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requireAndGetAddress(
      name: BytesLike,
      reason: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
