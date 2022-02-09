import { useState, useEffect, useMemo } from "react";
import { useMoralis } from "react-moralis";
import InchModal from "./components/InchModal";
import useInchDex from "hooks/useInchDex";
import { Button, Card, Image, Input, InputNumber, Modal } from "antd";
import Text from "antd/lib/typography/Text";
import { ArrowDownOutlined } from "@ant-design/icons";
import { useTokenPrice } from "react-moralis";
import { tokenValue } from "helpers/formatters";
import { getWrappedNative } from "helpers/networks";

import { useOneInchQuote } from "react-moralis";

function Swap() {
  const { swap, data, isFetching, isLoading, error } = useOneInchSwap();

  const options = {
    chain: 'polygon', // The blockchain you want to use (eth/bsc/polygon)
    fromTokenAddress: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', // The token you want to swap
    toTokenAddress: '0xabc454b770cdd7f21f16815d62e2ddacbbf3cbe2', // The token you want to receive
    amount: 1000,
    fromAddress: walletAddress, // Your wallet address
    slippage: 1,
  }

  return (
     <div>
        {error && <>{JSON.stringify(error)}</>}
        <DEX chain="polygon" customTokens={customTokens} />
        <button onClick={()=> swap(options)}>Swap</button>
    </div>
  );
}

return (
  <>
    <Card style={styles.card} bodyStyle={{ padding: "18px" }}>
      <Card
        style={{ borderRadius: "1rem" }}
        bodyStyle={{ padding: "0.8rem" }}
      >
        <div
          style={{ marginBottom: "5px", fontSize: "14px", color: "#434343" }}
        >
          From
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
          }}
        >
          <div>
            <InputNumber
              bordered={false}
              placeholder="0.00"
              style={{ ...styles.input, marginLeft: "-10px" }}
              onChange={setFromAmount}
              value={fromAmount}
            />
            <Text style={{ fontWeight: "600", color: "#434343" }}>
              {fromTokenAmountUsd}
            </Text>
          </div>
          <Button
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "0.6rem",
              padding: "5px 10px",
              fontWeight: "500",
              fontSize: "17px",
              gap: "7px",
              border: "none",
            }}
            onClick={() => setFromModalActive(true)}
          >
            {fromToken ? (
              <Image
                src={
                  fromToken?.logoURI ||
                  "https://etherscan.io/images/main/empty-token.png"
                }
                alt="nologo"
                width="30px"
                preview={false}
                style={{ borderRadius: "15px" }}
              />
            ) : (
              <span>Select a token</span>
            )}
            <span>{fromToken?.symbol}</span>
            <Arrow />
          </Button>
        </div>
      </Card>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <ArrowDownOutlined />
      </div>
      <Card
        style={{ borderRadius: "1rem" }}
        bodyStyle={{ padding: "0.8rem" }}
      >
        <div
          style={{ marginBottom: "5px", fontSize: "14px", color: "#434343" }}
        >
          To
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
          }}
        >
          <div>
            <Input
              bordered={false}
              placeholder="0.00"
              style={styles.input}
              readOnly
              value={
                quote
                  ? parseFloat(
                      Moralis?.Units?.FromWei(
                        quote?.toTokenAmount,
                        quote?.toToken?.decimals
                      )
                    ).toFixed(6)
                  : ""
              }
            />
            <Text style={{ fontWeight: "600", color: "#434343" }}>
              {toTokenAmountUsd}
            </Text>
          </div>
          <Button
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "0.6rem",
              padding: "5px 10px",
              fontWeight: "500",
              fontSize: "17px",
              gap: "7px",
              border: "none",
            }}
            onClick={() => setToModalActive(true)}
            type={toToken ? "default" : "primary"}
          >
            {toToken ? (
              <Image
                src={
                  toToken?.logoURI ||
                  "https://etherscan.io/images/main/empty-token.png"
                }
                alt="nologo"
                width="30px"
                preview={false}
                style={{ borderRadius: "15px" }}
              />
            ) : (
              <span>Select a token</span>
            )}
            <span>{toToken?.symbol}</span>
            <Arrow />
          </Button>
        </div>
      </Card>
      {quote && (
        <div>
          <Text
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "15px",
              color: "#434343",
              marginTop: "8px",
              padding: "0 10px",
            }}
          >
            Estimated Gas: <Text>{quote?.estimatedGas}</Text>
          </Text>
          <Swap />
        </div>
      )}
      <Button
        type="primary"
        size="large"
        style={{
          width: "100%",
          marginTop: "15px",
          borderRadius: "0.6rem",
          height: "50px",
        }}
        onClick={() => trySwap(currentTrade)}
        disabled={!ButtonState.isActive}
      >
        {ButtonState.text}
      </Button>
    </Card>
    <Modal
      title="Select a token"
      visible={isFromModalActive}
      onCancel={() => setFromModalActive(false)}
      bodyStyle={{ padding: 0 }}
      width="450px"
      footer={null}
    >
      <InchModal
        open={isFromModalActive}
        onClose={() => setFromModalActive(false)}
        setToken={setFromToken}
        tokenList={tokens}

      />
    </Modal>
    <Modal
      title="Select a token"
      visible={isToModalActive}
      onCancel={() => setToModalActive(false)}
      bodyStyle={{ padding: 0 }}
      width="450px"
      footer={null}
    >
      <InchModal
        open={isToModalActive}
        onClose={() => setToModalActive(false)}
        setToken={setToToken}
        tokenList={tokens}
      />
    </Modal>
  </>
);
}


export default RZIDex;
