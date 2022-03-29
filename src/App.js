import "./styles.scss";

export default function App() {
  return (
    <>
      <div class="bg-image"></div>

      <div class="Header">
        <div class="image">
          <img
            width="250"
            src="https://uploads.codesandbox.io/uploads/user/f1165d18-70f7-4c21-8c62-754fe7cbf7ba/M-EO-graph-logo2.png"
          />
        </div>

        <a href="app.satoshi-inu.club" target="_blank" id="saleAddress">
          <button id="buyBtn" class="button2">
            Rewards Center
          </button>
        </a>
      </div>

      <div class="main">
        <div class="block">
          <h1>Satoshi-Inu II (SATV)</h1>
          <p>
            {" "}
            The first Ethernal Safu token. A HYPER-DEFLATIONARY token that gives
            you rewards in BNB,SATV,BTC,BUSD. The coins you want, directly to
            your wallet. Passive Income, Made Easy!{" "}
          </p>

          <p>
            {" "}
            <h3>01. REFLECTIONS</h3>
            Over 50% is reflected to all holders for passive income paid in BNB,
            SATV, ETHFIN, BUSD, meaning that 70% of transactions IS
            redistributed to all Ethernal holders.
            <h3>02. LP ACQUISITION</h3>
            Over 30% is added to a liquidity pool increasing the token stability
            and price over time.
          </p>
          <p>
            <h3>03. Marketing</h3>
            3% is allocated to marketing efforts designed to achieve a
            continuous and sustainable growth.
          </p>
        </div>

        <div class="block">
          <h1>How to buy</h1>

          <span id="addtokens" class="status err">
            <br />
            <p>Contract Address: 0x43b7202a0B158eD791DE856884d7874535Deea05</p>
            Slippage: 5-7% Anti-whale limit: can only buy/sell max 100M SATV
            tokens per transaction
          </span>
          <p></p>
          <h3>
            How to Buy With Trust Wallet:{" "}
            <p>
              <a
                href="https://www.youtube.com/watch?v=uinGk6xX2j0"
                target="_blank"
                id="saleAddress"
              >
                <button id="buyBtn" class="button">
                  Click here
                </button>
              </a>
            </p>{" "}
          </h3>
          <h3>
            How to Buy With Metamask:
            <p>
              <a
                href="https://www.youtube.com/watch?v=KpF41eS3YZQ"
                target="_blank"
                id="saleAddress"
              >
                <button id="buyBtn" class="button">
                  Click here
                </button>
              </a>
            </p>
          </h3>
        </div>
      </div>

      <div class="main">
        <div class="block block1">
          <h1>What is Satoshi-Inu?</h1>
          <p>
            A hyper-deflationary community driven DeFi Token with an innovative
            reflections functionality based on Ethernal finance's DAO contract.
            With a focus on continuous, sustainable growth. We aim to provide
            our holders with a stable source of passive income, by reflectingm
            ojority of the transactions tax back to them.
          </p>
          <p>
            At the same time, we are building a growing, sustainable “Ethernal
            Ecosystem”: we offer governance mechanisms through the Ethernal
            community governance platform. This allows Satoshi holders to have a
            say in the project decisions, Ethernal finance has a unique lottery
            with burn functions and shared pots so satoshi holders can enjoy
            their chances at winning some big prize pots,
          </p>
          <p>
            The best part? All of these exciting features create more utility,
            by using tokens as their main building block, which in turn will
            keep generating new revenue streams for the holders.
          </p>
        </div>
      </div>
    </>
  );
}
