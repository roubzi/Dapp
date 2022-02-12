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
          📡 <Text strong>RoubZi Artist</Text>
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
                href="https://roubzi.org/whitepaper"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => alert("Work in progress")}
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
      <div>

        <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>Starting Local Chain (optional)</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Install{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/truffle">
                  Truffle
                </a>{" "}
                and{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/ganache-cli">
                  ganache-cli
                </a>{" "}
                <Text code>npm install -g ganache-cli truffle</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Start you local devchain: <Text code>npm run devchain</Text> on a new terminal
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>
                Deploy test contract: <Text code>npm run deploy</Text> on a new terminal
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>
                Open the 📄<Text strong> Contract</Text> tab
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡 <Text strong> Connecting your Local Chain to the Moralis DB</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Download{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/fatedier/frp/releases">
                  frpc
                </a>{" "}
                and provide missing params in the <Text code>.env</Text> file
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Connect your Moralis Database and Local Chain: <Text code>npm run connect</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💾">
              <Text style={styles.text}>
                Add contract events you want to watch: <Text code>npm run watch:events</Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
