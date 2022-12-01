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
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ISystemSettingsInterface extends ethers.utils.Interface {
  functions: {
    "etherWrapperBurnFeeRate()": FunctionFragment;
    "etherWrapperMaxETH()": FunctionFragment;
    "etherWrapperMintFeeRate()": FunctionFragment;
    "exchangeFeeRate(bytes32)": FunctionFragment;
    "feePeriodDuration()": FunctionFragment;
    "issuanceRatio()": FunctionFragment;
    "liquidationDelay()": FunctionFragment;
    "liquidationPenalty()": FunctionFragment;
    "liquidationRatio()": FunctionFragment;
    "minimumStakeTime()": FunctionFragment;
    "priceDeviationThresholdFactor()": FunctionFragment;
    "rateStalePeriod()": FunctionFragment;
    "targetThreshold()": FunctionFragment;
    "waitingPeriodSecs()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "etherWrapperBurnFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "etherWrapperMaxETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "etherWrapperMintFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeFeeRate",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "feePeriodDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "issuanceRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationPenalty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumStakeTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceDeviationThresholdFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rateStalePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "waitingPeriodSecs",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "etherWrapperBurnFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "etherWrapperMaxETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "etherWrapperMintFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feePeriodDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issuanceRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationPenalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumStakeTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceDeviationThresholdFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rateStalePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "waitingPeriodSecs",
    data: BytesLike
  ): Result;

  events: {};
}

export class ISystemSettings extends BaseContract {
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

  interface: ISystemSettingsInterface;

  functions: {
    etherWrapperBurnFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    etherWrapperMaxETH(overrides?: CallOverrides): Promise<[BigNumber]>;

    etherWrapperMintFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    exchangeFeeRate(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    feePeriodDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    issuanceRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationPenalty(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumStakeTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceDeviationThresholdFactor(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rateStalePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    targetThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    waitingPeriodSecs(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  etherWrapperBurnFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  etherWrapperMaxETH(overrides?: CallOverrides): Promise<BigNumber>;

  etherWrapperMintFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  exchangeFeeRate(
    currencyKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  feePeriodDuration(overrides?: CallOverrides): Promise<BigNumber>;

  issuanceRatio(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationDelay(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationRatio(overrides?: CallOverrides): Promise<BigNumber>;

  minimumStakeTime(overrides?: CallOverrides): Promise<BigNumber>;

  priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<BigNumber>;

  rateStalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  targetThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  waitingPeriodSecs(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    etherWrapperBurnFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperMaxETH(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperMintFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeFeeRate(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feePeriodDuration(overrides?: CallOverrides): Promise<BigNumber>;

    issuanceRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    minimumStakeTime(overrides?: CallOverrides): Promise<BigNumber>;

    priceDeviationThresholdFactor(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateStalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    targetThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    waitingPeriodSecs(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    etherWrapperBurnFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperMaxETH(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperMintFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeFeeRate(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feePeriodDuration(overrides?: CallOverrides): Promise<BigNumber>;

    issuanceRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    minimumStakeTime(overrides?: CallOverrides): Promise<BigNumber>;

    priceDeviationThresholdFactor(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateStalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    targetThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    waitingPeriodSecs(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    etherWrapperBurnFeeRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    etherWrapperMaxETH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    etherWrapperMintFeeRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchangeFeeRate(
      currencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feePeriodDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    issuanceRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationPenalty(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidationRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumStakeTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceDeviationThresholdFactor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rateStalePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    targetThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    waitingPeriodSecs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
