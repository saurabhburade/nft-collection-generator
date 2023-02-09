const nftsWithAttributes = require("./generated-nfts/nfts.json");
const config = require("./config.js");
const IPFS_CID = "QmTGdhCBeDZTFL3Y9eKiw7n69DRA15MniwtAPk7fyRxwfq";
const fs = require("fs");

const attrtibutes = config.attributes;
const main = async () => {
  const parsedNftMetas = nftsWithAttributes.map((nft, nftIdx) => {
    const attrMap = attrtibutes.map((val, idx) => {
      const attr = val;
      const attrKey = attr["name"];
      const attrValIndex = nft[idx];
      if (attrValIndex == 0) {
        return {
          name: attrKey,
          value: "NA",
        };
      }
      return {
        name: attrKey,
        value: attr["values"][attrValIndex - 1],
      };
    });

    return {
      id: nftIdx + 1,
      name: `Workoholic ${nftIdx + 1}`,
      description: "NFT Collection workshop [Shardeum].",
      image: `ipfs://${IPFS_CID}/${nftIdx + 1}.png`,
      edition: 1,
      attrtibutes: attrMap,
    };
  });
  if (!fs.existsSync(`${config.outputFolder}/metadata`)) {
    fs.mkdirSync(`${config.outputFolder}/metadata`);
  }
  parsedNftMetas.forEach((nftMetadata, idx) => {
    fs.writeFile(
      `./generated-nfts/metadata/${idx + 1}.json`,
      JSON.stringify(nftMetadata),
      (err) => {
        console.log("====================================");
        console.log({ err });
        console.log("====================================");
      }
    );
  });
  console.log("====================================");
  console.log({ parsedNftMetas });
  console.log("====================================");

  fs.writeFile(
    "./generated-nfts/metadata/metadata.json",
    JSON.stringify(parsedNftMetas),
    (err) => {
      console.log("====================================");
      console.log({ err });
      console.log("====================================");
    }
  );
};
main();
