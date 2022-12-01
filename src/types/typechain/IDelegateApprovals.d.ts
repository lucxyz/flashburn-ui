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
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IDelegateApprovalsInterface extends ethers.utils.Interface {
  functions: {
    "approveAllDelegatePowers(address)": FunctionFragment;
    "approveBurnOnBehalf(address)": FunctionFragment;
    "approveClaimOnBehalf(address)": FunctionFragment;
    "approveExchangeOnBehalf(address)": FunctionFragment;
    "approveIssueOnBehalf(address)": FunctionFragment;
    "canBurnFor(address,address)": FunctionFragment;
    "canClaimFor(address,address)": FunctionFragment;
    "canExchangeFor(address,address)": FunctionFragment;
    "canIssueFor(address,address)": FunctionFragment;
    "removeAllDelegatePowers(address)": FunctionFragment;
    "removeBurnOnBehalf(address)": FunctionFragment;
    "removeClaimOnBehalf(address)": FunctionFragment;
    "removeExchangeOnBehalf(address)": FunctionFragment;
    "removeIssueOnBehalf(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveAllDelegatePowers",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveBurnOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveClaimOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveExchangeOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveIssueOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "canBurnFor",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canClaimFor",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canExchangeFor",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canIssueFor",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAllDelegatePowers",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBurnOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeClaimOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeExchangeOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeIssueOnBehalf",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveAllDelegatePowers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveBurnOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveClaimOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveExchangeOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveIssueOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canBurnFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canClaimFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canExchangeFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canIssueFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAllDelegatePowers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBurnOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeClaimOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeExchangeOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeIssueOnBehalf",
    data: BytesLike
  ): Result;

  events: {};
}

export class IDelegateApprovals extends BaseContract {
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

  interface: IDelegateApprovalsInterface;

  functions: {
    approveAllDelegatePowers(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveBurnOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveClaimOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveExchangeOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveIssueOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canBurnFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    canClaimFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    canExchangeFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    canIssueFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeAllDelegatePowers(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeBurnOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeClaimOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeExchangeOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeIssueOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approveAllDelegatePowers(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveBurnOnBehalf(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveClaimOnBehalf(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveExchangeOnBehalf(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveIssueOnBehalf(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canBurnFor(
    authoriser: string,
    delegate: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  canClaimFor(
    authoriser: string,
    delegate: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  canExchangeFor(
    authoriser: string,
    delegate: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  canIssueFor(
    authoriser: string,
    delegate: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeAllDelegatePowers(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeBurnOnBehalf(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeClaimOnBehalf(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeExchangeOnBehalf(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeIssueOnBehalf(
    delegate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveAllDelegatePowers(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    approveBurnOnBehalf(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    approveClaimOnBehalf(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    approveExchangeOnBehalf(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    approveIssueOnBehalf(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    canBurnFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    canClaimFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    canExchangeFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    canIssueFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeAllDelegatePowers(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeBurnOnBehalf(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeClaimOnBehalf(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeExchangeOnBehalf(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeIssueOnBehalf(
      delegate: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approveAllDelegatePowers(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveBurnOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveClaimOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveExchangeOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveIssueOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canBurnFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canClaimFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canExchangeFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canIssueFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeAllDelegatePowers(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeBurnOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeClaimOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeExchangeOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeIssueOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveAllDelegatePowers(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveBurnOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveClaimOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveExchangeOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveIssueOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canBurnFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canClaimFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canExchangeFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canIssueFor(
      authoriser: string,
      delegate: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAllDelegatePowers(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeBurnOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeClaimOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeExchangeOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeIssueOnBehalf(
      delegate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
