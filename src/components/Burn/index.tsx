import {
  Box,
  BoxProps,
  Button,
  Center,
  Stat,
  StatLabel,
  StatNumber,
  Spinner,
  Flex,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  Link,
} from "@chakra-ui/react";
import { ArrowDownIcon, SettingsIcon, RepeatIcon } from "@chakra-ui/icons";
import { ethers } from "ethers";
import { Burn as BurnInterface } from "../../hooks/useBurn";
import useWeb3React from "../../hooks/useWeb3React";
import useSynthetix from "../../hooks/useSynthetix";
import WalletButton from "../NavBar/WalletButton";
import AmountInput from "./AmountInput";
import SlippageTolerance from "./SlippageTolerance";
import { formatAmount } from "../../utils";

function Burn({
  snxAmount,
  sUSDAmount,
  sUSDAmountBN,
  snxUSDAmountBN,
  setSnxAmount,
  setSUSDAmount,
  setMaxSUSD,
  setSlippage,
  isSUSDMax,
  loading,
  isBurnApproved,
  isApproved,
  isValid,
  isInputValid,
  oneInchError,
  loadingApproveBurn,
  loadingApprove,
  loadingBurn,
  approveBurn,
  approve,
  burnButton,
  fetchTrade,
  priceImpact,
  slippage,
  props,
}: BurnInterface & { props?: BoxProps }): JSX.Element {
  const { provider, chainId } = useWeb3React();
  const { balances, loaded, error } = useSynthetix();
  const {
    rateForCurrency,
    sUSDDecimals,
    balanceOf,
    snxDecimals,
    debtBalanceOf,
  } = balances;
  const isRefreshDisabled: boolean = loading || sUSDAmountBN.toString() === "0";

  return (
    <Box {...props}>
      <Flex marginBottom="2">
        <Stat>
          <StatLabel>SNX Price</StatLabel>
          <StatNumber>
            {provider !== undefined && !error ? (
              loaded ? (
                `$${formatAmount(
                  ethers.utils.formatUnits(rateForCurrency, sUSDDecimals)
                )}`
              ) : (
                <>
                  {"$ "}
                  <Spinner size="sm" />
                </>
              )
            ) : (
              "$-"
            )}
          </StatNumber>
        </Stat>
        <IconButton
          bg="#06061B"
          marginTop="2"
          marginRight="1"
          border="2px"
          aria-label="Reload prices"
          disabled={isRefreshDisabled}
          onClick={fetchTrade}
          icon={
            loading ? (
              <Spinner w={6} h={6} />
            ) : (
              <RepeatIcon color="#00D1FF" w={6} h={6} />
            )
          }
          _hover={{
            bg: isRefreshDisabled ? "#06061B" : "white",
          }}
        />
        <Popover id={"popover"}>
          <PopoverTrigger>
            <IconButton
              bg="#06061B"
              marginTop="2"
              border="2px"
              aria-label="Search database"
              icon={<SettingsIcon color="#00D1FF" w={6} h={6} />}
              _hover={{
                bg: "white",
              }}
            />
          </PopoverTrigger>
          <PopoverContent maxWidth="60" bg="#06061B">
            <PopoverArrow />
            <PopoverCloseButton marginTop="1" />
            <PopoverHeader>Settings</PopoverHeader>
            <PopoverBody>
              <Text marginBottom="2">Slippage tolerance</Text>
              <SlippageTolerance
                slippage={slippage}
                setSlippage={setSlippage}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <AmountInput
        badgeText="sUSD Debt"
        disabled={false}
        setMaxSUSD={setMaxSUSD}
        amount={sUSDAmount}
        setAmount={setSUSDAmount}
        isSUSDMax={isSUSDMax}
        isValid={isInputValid}
        usdAmount={ethers.utils.formatUnits(sUSDAmountBN, sUSDDecimals)}
        priceImpact={priceImpact}
        badgeAmount={
          provider !== undefined
            ? formatAmount(
                ethers.utils.formatUnits(debtBalanceOf, sUSDDecimals)
              )
            : "-"
        }
        src={"/sUSD.svg"}
        alt="sUSD"
      />
      <Center marginBottom="2" marginTop={1}>
        <ArrowDownIcon w={5} h={5} border="1px" rounded="sm" />
      </Center>
      <AmountInput
        badgeText="SNX Balance"
        disabled={true}
        setMaxSUSD={setMaxSUSD}
        amount={snxAmount}
        setAmount={setSnxAmount}
        isSUSDMax={isSUSDMax}
        isValid={true}
        usdAmount={ethers.utils.formatUnits(snxUSDAmountBN, snxDecimals)}
        badgeAmount={
          provider !== undefined
            ? formatAmount(ethers.utils.formatUnits(balanceOf, snxDecimals))
            : "-"
        }
        src={"/snx.svg"}
        alt="snx"
      />
      <Center marginTop="2">
        {provider !== undefined ? (
          <Flex>
            <Button
              marginRight="1"
              color="black"
              disabled={!(!isBurnApproved && isValid && !loadingApproveBurn)}
              isLoading={loadingApproveBurn}
              loadingText="Approve Burn"
              onClick={approveBurn}
            >
              Approve Burn
            </Button>
            <Button
              marginRight="1"
              color="black"
              disabled={
                !(
                  isBurnApproved &&
                  !isApproved &&
                  isValid &&
                  !loading &&
                  !loadingApprove
                )
              }
              onClick={approve}
              isLoading={loadingApprove}
              loadingText="Approve SNX"
            >
              Approve SNX
            </Button>
            <Button
              color="black"
              disabled={
                !(
                  isBurnApproved &&
                  isApproved &&
                  isValid &&
                  !loading &&
                  !loadingBurn
                )
              }
              onClick={burnButton}
              isLoading={loadingBurn}
              loadingText="Burn"
            >
              Burn
            </Button>
          </Flex>
        ) : (
          <WalletButton />
        )}
      </Center>
      <Center marginTop="3">
        <Flex fontWeight="bold">
          Powered by{" "}
          <Box marginTop="0.5" marginLeft="1">
            <Link
              href={`https://app.1inch.io/#/${
                chainId === 1337 ? 1 : chainId
              }/swap/SNX/sUSD`}
              isExternal
            >
              {/* eslint-disable @next/next/no-img-element */}
              <img src={"/oneInch.svg"} alt={"1inch"} width={18} height={18} />
            </Link>
          </Box>
        </Flex>
      </Center>
      {oneInchError && (
        <Center marginTop="1">
          <Text fontWeight="bold" textColor="crimson">
            1inch failed. Please{" "}
            <Link textDecoration="underline" onClick={() => fetchTrade()}>
              try again
            </Link>{" "}
            or enter a valid amount.
          </Text>
        </Center>
      )}
    </Box>
  );
}

export default Burn;
