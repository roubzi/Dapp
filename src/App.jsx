import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import RZIDex from "components/RZIDex"

import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
    width : "auto",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 5px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 50%)",
  },
  headerRight: {
    display: "flex",
    //width: "full",
    gap: "15px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);


  const customTokens = {
      "RZIGON": {
        address: "0xabc454b770cdd7f21f16815d62e2ddacbbf3cbe2",
        decimals: 18,
        logoURI: "https://bafybeic3wfudggswwjdvuz5jnogwdy6cl7eozz3smudv5dxcdct5xdflam.ipfs.infura-ipfs.io/",
        name: "RoubziGon",
        symbol: "RZIG",
      },
    };


  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />

          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
                        <TokenPrice
              address="0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
              chain="POLYGON"
              //image="https://cloudflare-ipfs.com/ipfs/QmQTx2mZwnBgL4cYzasTZ834FA2kLNjtepjnscvWJSk7Jc/"
              image="https://bafybeic3wfudggswwjdvuz5jnogwdy6cl7eozz3smudv5dxcdct5xdflam.ipfs.infura-ipfs.io/"
              size = "40px"
              //height="40px"
              //width="40px"
            />
            |
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/quickstart">
              <QuickStart isServerInfo={isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet chain="polygon"/>
            </Route>
            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>

                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" customTokens={customTokens} />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/RZIDex">
              <RZIDex/>
            </Route>
            <Route path="/nftBalance">
              <NFTBalance/>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance/>
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers/>
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          ⭐️ Please star {" "}
          <a
            href="https://github.com/roubzi/Dapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roubzi Dapp
          </a>
          , it's free and makes us very happy!
        </Text>
        <Text style={{ display: "block" }}>
          🎨 Want to buy our paintings ? {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rescoe.fr"
          >
            Rescoe Art Gallery
          </a>
        </Text>
        <Text style={{ display: "block" }}>
          💡 You have questions? Ask us on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://"
          >
            roubzi@roubzi.org
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://roubzi.org"
          >
            Roubzi
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};



export const Logo = () => (
  <div style={{ display: "flex" }}>


</div>
);

export default App;
