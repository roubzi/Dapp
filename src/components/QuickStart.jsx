import { Card, Timeline, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};


export default function QuickStart({ isServerInfo }) {




  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            🦊 <Text strong>Install Metamask</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="💣">
            <Text style={styles.text}>
              Installing and setting up {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/">
                MetaMask
              </a>{" "}
            </Text>
          </Timeline.Item>
          <Timeline.Item dot="⚙️">
            <Text style={styles.text}>
              After downloading and installing the extension, you’ll be greeted with the MetaMask welcome page. Click <Text code>[Get Started]</Text> to begin
            </Text>
          </Timeline.Item>
          <Timeline.Item dot="📡">
            <Text style={styles.text}>
            If you have found a RZI in the street with an NFC tag inside, click on <Text code>[Import wallet]</Text>
            Now, you need to use the <Text Strong>seed phrase</Text> scanned and the <Text Strong>password</Text> encrypted inside the artwork.

            Else, if you want to buy a RZI, then you need to create a new wallet by clicking the <Text code>[Create a Wallet]</Text> button.

            </Text>
          </Timeline.Item>
          <Timeline.Item dot="✅" style={styles.text}>
            <Text>
              MetaMask will be your guide and will present you with information regarding your wallet’s seed phrase. Make sure to read through it if you aren’t familiar with how a crypto wallet works.
            </Text>
          </Timeline.Item>
        </Timeline>
        </Card>


        <Card
        style={styles.card}
        title={
          <>
             📡<Text strong> Configuring the wallet to Polygon Network</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="🌲">
            <Text style={styles.text}>
            Open MetaMask and click the <Text Strong>network</Text> dropdown menu.
            </Text>
          </Timeline.Item>
          <Timeline.Item dot="🌳">
            <Text style={styles.text}>
            Click [Add Network] on the pop-up. Now, you’ll need to add the following details on the <Text code>[Add a network]</Text> page that will open. Click <Text code>[Save]</Text> when you’re finished.
            </Text>
            <Timeline mode="left" style={styles.timeline}>
              <Timeline.Item dot="🌴">
                  <Text style={styles.text}>
                  <Text Strong>Network Name : </Text> Polygon
                  </Text>
                </Timeline.Item>
                <Timeline.Item dot="🌵">

                    <Text style={styles.text}>
                    <Text Strong>New RPC URL : (Choose any of the following) </Text>
                      <Timeline mode="left" style={styles.timeline}>
                        <Timeline.Item dot="✔">
                          <Text code>https://polygon-rpc.com</Text>
                          </Timeline.Item>
                          <Timeline.Item dot="✔">
                          <Text code>https://rpc-mainnet.maticvigil.com </Text>
                          </Timeline.Item>
                          <Timeline.Item dot="✔">
                          <Text code>https://rpc-mainnet.matic.network </Text>
                          </Timeline.Item>
                          <Timeline.Item dot="✔">
                          <Text code>https://rpc-mainnet.matic.quiknode.pro </Text>
                          </Timeline.Item>
                          <Timeline.Item dot="✔">

                          </Timeline.Item>
                      </Timeline>
                    </Text>
                  </Timeline.Item>
                  <Timeline.Item dot="🌾">
                      <Text style={styles.text}>
                      <Text Strong>Chain ID : </Text> 137
                      </Text>
                    </Timeline.Item>
                    <Timeline.Item dot="🍀">
                        <Text style={styles.text}>
                        <Text Strong>Currency Symbol : </Text> MATIC
                        </Text>
                      </Timeline.Item>
                      <Timeline.Item dot="🌱">
                          <Text style={styles.text}>
                          <Text Strong>Block Explorer URL : </Text> https://polygonscan.com/
                          </Text>
                        </Timeline.Item>
            </Timeline>
          </Timeline.Item>
        </Timeline>
      </Card>

      <div>

      <Card
        style={styles.card}
        title={
          <>
          💣 <Text strong>About RoubZi </Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📄">
            <Text style={styles.text}>
              Involved in a decentralized street art ! Check out our {" "}
              <a
                href="https://roubzi.org/whitepaper"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => alert("Work in progress")}
              >
                White Paper
              </a>{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🐧">
            <Text style={styles.text}>
              Discover our paintings and order them online {" "}
              <a
                href="https://rescoe.fr/roubzi"
                target="_blank"
                rel="noopener noreferrer"

              >
                in our associative art gallery Rescoe.fr
              </a>{" "}

            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔎">
            <Text style={styles.text}>
              Search and scan our street art around the world to get free RZI Monsters{" "}
              <a
                href="https://roubzi.org/Tutorials"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => alert("Work in progress")}
              >
              How can I do that ?
              </a>{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🎨">
            <Text style={styles.text}>
              Find information about our paintings location by checking our {""}
              <a
                href="https://www.instagram.com/roubzi_artist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>{""}

            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
          <Text style={styles.text}>Join the</Text>

            <Text style={styles.text}> Street art 3.0 </Text>
          </Timeline.Item>
        </Timeline>
      </Card>

        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              ☭ <Text strong> When You find a wild RZI, It is very important to : </Text>
            </>
          }
        >
        <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="📳">
              <Text style={styles.text}>
                Scan the Tile with your Phone (you need to activate the NFC)

              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💾">
              <Text style={styles.text}>
                Take a screen of the data scanned, you need to keep the Seed and the passphrase to capture the RZI
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Once you have imported the wallet, send the RZI to your real Metmask wallet (maybe someone has discovered the RZI too !)
              </Text>
            </Timeline.Item>

            
              <Timeline.Item dot="🤷‍♂️">
                <Text style={styles.text}>
                Do not change the password of the metamask account and dont reveal the location of the RZI, maybe an other RZI will spawn here

                </Text>
                </Timeline.Item>

          </Timeline>
        </Card>
      </div>
    </div>
  );
}
