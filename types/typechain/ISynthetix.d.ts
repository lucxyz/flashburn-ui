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

interface ISynthetixInterface extends ethers.utils.Interface {
  functions: {
    "anySynthOrSNXRateIsInvalid()": FunctionFragment;
    "availableCurrencyKeys()": FunctionFragment;
    "availableSynthCount()": FunctionFragment;
    "availableSynths(uint256)": FunctionFragment;
    "burnSecondary(address,uint256)": FunctionFragment;
    "burnSynths(uint256)": FunctionFragment;
    "burnSynthsOnBehalf(address,uint256)": FunctionFragment;
    "burnSynthsToTarget()": FunctionFragment;
    "burnSynthsToTargetOnBehalf(address)": FunctionFragment;
    "collateral(address)": FunctionFragment;
    "collateralisationRatio(address)": FunctionFragment;
    "debtBalanceOf(address,bytes32)": FunctionFragment;
    "exchange(bytes32,uint256,bytes32)": FunctionFragment;
    "exchangeOnBehalf(address,bytes32,uint256,bytes32)": FunctionFragment;
    "exchangeOnBehalfWithTracking(address,bytes32,uint256,bytes32,address,bytes32)": FunctionFragment;
    "exchangeWithTracking(bytes32,uint256,bytes32,address,bytes32)": FunctionFragment;
    "exchangeWithTrackingForInitiator(bytes32,uint256,bytes32,address,bytes32)": FunctionFragment;
    "exchangeWithVirtual(bytes32,uint256,bytes32,bytes32)": FunctionFragment;
    "isWaitingPeriod(bytes32)": FunctionFragment;
    "issueMaxSynths()": FunctionFragment;
    "issueMaxSynthsOnBehalf(address)": FunctionFragment;
    "issueSynths(uint256)": FunctionFragment;
    "issueSynthsOnBehalf(address,uint256)": FunctionFragment;
    "liquidateDelinquentAccount(address,uint256)": FunctionFragment;
    "maxIssuableSynths(address)": FunctionFragment;
    "mint()": FunctionFragment;
    "mintSecondary(address,uint256)": FunctionFragment;
    "mintSecondaryRewards(uint256)": FunctionFragment;
    "remainingIssuableSynths(address)": FunctionFragment;
    "settle(bytes32)": FunctionFragment;
    "synths(bytes32)": FunctionFragment;
    "synthsByAddress(address)": FunctionFragment;
    "totalIssuedSynths(bytes32)": FunctionFragment;
    "totalIssuedSynthsExcludeEtherCollateral(bytes32)": FunctionFragment;
    "transferableSynthetix(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "anySynthOrSNXRateIsInvalid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "availableCurrencyKeys",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "availableSynthCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "availableSynths",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnSecondary",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnSynths",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnSynthsOnBehalf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnSynthsToTarget",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burnSynthsToTargetOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "collateral", values: [string]): string;
  encodeFunctionData(
    functionFragment: "collateralisationRatio",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "debtBalanceOf",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeOnBehalf",
    values: [string, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeOnBehalfWithTracking",
    values: [string, BytesLike, BigNumberish, BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeWithTracking",
    values: [BytesLike, BigNumberish, BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeWithTrackingForInitiator",
    values: [BytesLike, BigNumberish, BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeWithVirtual",
    values: [BytesLike, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isWaitingPeriod",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "issueMaxSynths",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "issueMaxSynthsOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "issueSynths",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "issueSynthsOnBehalf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateDelinquentAccount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxIssuableSynths",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintSecondary",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintSecondaryRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "remainingIssuableSynths",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "settle", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "synths", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "synthsByAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalIssuedSynths",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalIssuedSynthsExcludeEtherCollateral",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferableSynthetix",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "anySynthOrSNXRateIsInvalid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "availableCurrencyKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "availableSynthCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "availableSynths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnSecondary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burnSynths", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnSynthsOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnSynthsToTarget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnSynthsToTargetOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralisationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "debtBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchangeOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeOnBehalfWithTracking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeWithTracking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeWithTrackingForInitiator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeWithVirtual",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWaitingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueMaxSynths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueMaxSynthsOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueSynths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueSynthsOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateDelinquentAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxIssuableSynths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintSecondary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintSecondaryRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remainingIssuableSynths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "synths", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "synthsByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalIssuedSynths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalIssuedSynthsExcludeEtherCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferableSynthetix",
    data: BytesLike
  ): Result;

  events: {};
}

export class ISynthetix extends BaseContract {
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

  interface: ISynthetixInterface;

  functions: {
    anySynthOrSNXRateIsInvalid(
      overrides?: CallOverrides
    ): Promise<[boolean] & { anyRateInvalid: boolean }>;

    availableCurrencyKeys(overrides?: CallOverrides): Promise<[string[]]>;

    availableSynthCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    availableSynths(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    burnSecondary(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnSynths(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnSynthsOnBehalf(
      burnForAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnSynthsToTarget(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnSynthsToTargetOnBehalf(
      burnForAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collateral(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collateralisationRatio(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    debtBalanceOf(
      issuer: string,
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exchange(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchangeOnBehalf(
      exchangeForAddress: string,
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: string,
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchangeWithTracking(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchangeWithTrackingForInitiator(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchangeWithVirtual(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isWaitingPeriod(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    issueMaxSynths(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    issueMaxSynthsOnBehalf(
      issueForAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    issueSynths(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    issueSynthsOnBehalf(
      issueForAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidateDelinquentAccount(
      account: string,
      susdAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    maxIssuableSynths(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxIssuable: BigNumber }>;

    mint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintSecondary(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintSecondaryRewards(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remainingIssuableSynths(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        maxIssuable: BigNumber;
        alreadyIssued: BigNumber;
        totalSystemDebt: BigNumber;
      }
    >;

    settle(
      currencyKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    synths(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    synthsByAddress(
      synthAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalIssuedSynths(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalIssuedSynthsExcludeEtherCollateral(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferableSynthetix(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { transferable: BigNumber }>;
  };

  anySynthOrSNXRateIsInvalid(overrides?: CallOverrides): Promise<boolean>;

  availableCurrencyKeys(overrides?: CallOverrides): Promise<string[]>;

  availableSynthCount(overrides?: CallOverrides): Promise<BigNumber>;

  availableSynths(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  burnSecondary(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnSynths(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnSynthsOnBehalf(
    burnForAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnSynthsToTarget(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnSynthsToTargetOnBehalf(
    burnForAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collateral(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  collateralisationRatio(
    issuer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  debtBalanceOf(
    issuer: string,
    currencyKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exchange(
    sourceCurrencyKey: BytesLike,
    sourceAmount: BigNumberish,
    destinationCurrencyKey: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchangeOnBehalf(
    exchangeForAddress: string,
    sourceCurrencyKey: BytesLike,
    sourceAmount: BigNumberish,
    destinationCurrencyKey: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchangeOnBehalfWithTracking(
    exchangeForAddress: string,
    sourceCurrencyKey: BytesLike,
    sourceAmount: BigNumberish,
    destinationCurrencyKey: BytesLike,
    rewardAddress: string,
    trackingCode: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchangeWithTracking(
    sourceCurrencyKey: BytesLike,
    sourceAmount: BigNumberish,
    destinationCurrencyKey: BytesLike,
    rewardAddress: string,
    trackingCode: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchangeWithTrackingForInitiator(
    sourceCurrencyKey: BytesLike,
    sourceAmount: BigNumberish,
    destinationCurrencyKey: BytesLike,
    rewardAddress: string,
    trackingCode: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchangeWithVirtual(
    sourceCurrencyKey: BytesLike,
    sourceAmount: BigNumberish,
    destinationCurrencyKey: BytesLike,
    trackingCode: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isWaitingPeriod(
    currencyKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  issueMaxSynths(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  issueMaxSynthsOnBehalf(
    issueForAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  issueSynths(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  issueSynthsOnBehalf(
    issueForAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidateDelinquentAccount(
    account: string,
    susdAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  maxIssuableSynths(
    issuer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mint(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintSecondary(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintSecondaryRewards(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remainingIssuableSynths(
    issuer: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      maxIssuable: BigNumber;
      alreadyIssued: BigNumber;
      totalSystemDebt: BigNumber;
    }
  >;

  settle(
    currencyKey: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  synths(currencyKey: BytesLike, overrides?: CallOverrides): Promise<string>;

  synthsByAddress(
    synthAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  totalIssuedSynths(
    currencyKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalIssuedSynthsExcludeEtherCollateral(
    currencyKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferableSynthetix(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    anySynthOrSNXRateIsInvalid(overrides?: CallOverrides): Promise<boolean>;

    availableCurrencyKeys(overrides?: CallOverrides): Promise<string[]>;

    availableSynthCount(overrides?: CallOverrides): Promise<BigNumber>;

    availableSynths(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    burnSecondary(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    burnSynths(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnSynthsOnBehalf(
      burnForAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    burnSynthsToTarget(overrides?: CallOverrides): Promise<void>;

    burnSynthsToTargetOnBehalf(
      burnForAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    collateral(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    collateralisationRatio(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtBalanceOf(
      issuer: string,
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchange(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeOnBehalf(
      exchangeForAddress: string,
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: string,
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeWithTracking(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeWithTrackingForInitiator(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeWithVirtual(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      trackingCode: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { amountReceived: BigNumber; vSynth: string }
    >;

    isWaitingPeriod(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    issueMaxSynths(overrides?: CallOverrides): Promise<void>;

    issueMaxSynthsOnBehalf(
      issueForAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    issueSynths(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    issueSynthsOnBehalf(
      issueForAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidateDelinquentAccount(
      account: string,
      susdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxIssuableSynths(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(overrides?: CallOverrides): Promise<boolean>;

    mintSecondary(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mintSecondaryRewards(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    remainingIssuableSynths(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        maxIssuable: BigNumber;
        alreadyIssued: BigNumber;
        totalSystemDebt: BigNumber;
      }
    >;

    settle(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        reclaimed: BigNumber;
        refunded: BigNumber;
        numEntries: BigNumber;
      }
    >;

    synths(currencyKey: BytesLike, overrides?: CallOverrides): Promise<string>;

    synthsByAddress(
      synthAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    totalIssuedSynths(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalIssuedSynthsExcludeEtherCollateral(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferableSynthetix(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    anySynthOrSNXRateIsInvalid(overrides?: CallOverrides): Promise<BigNumber>;

    availableCurrencyKeys(overrides?: CallOverrides): Promise<BigNumber>;

    availableSynthCount(overrides?: CallOverrides): Promise<BigNumber>;

    availableSynths(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnSecondary(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnSynths(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnSynthsOnBehalf(
      burnForAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnSynthsToTarget(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnSynthsToTargetOnBehalf(
      burnForAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collateral(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    collateralisationRatio(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtBalanceOf(
      issuer: string,
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchange(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchangeOnBehalf(
      exchangeForAddress: string,
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: string,
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchangeWithTracking(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchangeWithTrackingForInitiator(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchangeWithVirtual(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isWaitingPeriod(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issueMaxSynths(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    issueMaxSynthsOnBehalf(
      issueForAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    issueSynths(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    issueSynthsOnBehalf(
      issueForAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidateDelinquentAccount(
      account: string,
      susdAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    maxIssuableSynths(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintSecondary(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintSecondaryRewards(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remainingIssuableSynths(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    settle(
      currencyKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    synths(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    synthsByAddress(
      synthAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalIssuedSynths(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalIssuedSynthsExcludeEtherCollateral(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferableSynthetix(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    anySynthOrSNXRateIsInvalid(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    availableCurrencyKeys(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    availableSynthCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    availableSynths(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnSecondary(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnSynths(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnSynthsOnBehalf(
      burnForAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnSynthsToTarget(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnSynthsToTargetOnBehalf(
      burnForAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collateral(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralisationRatio(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtBalanceOf(
      issuer: string,
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchange(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchangeOnBehalf(
      exchangeForAddress: string,
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchangeOnBehalfWithTracking(
      exchangeForAddress: string,
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchangeWithTracking(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchangeWithTrackingForInitiator(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      rewardAddress: string,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchangeWithVirtual(
      sourceCurrencyKey: BytesLike,
      sourceAmount: BigNumberish,
      destinationCurrencyKey: BytesLike,
      trackingCode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isWaitingPeriod(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issueMaxSynths(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    issueMaxSynthsOnBehalf(
      issueForAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    issueSynths(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    issueSynthsOnBehalf(
      issueForAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidateDelinquentAccount(
      account: string,
      susdAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    maxIssuableSynths(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintSecondary(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintSecondaryRewards(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remainingIssuableSynths(
      issuer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    settle(
      currencyKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    synths(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    synthsByAddress(
      synthAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalIssuedSynths(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalIssuedSynthsExcludeEtherCollateral(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferableSynthetix(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
