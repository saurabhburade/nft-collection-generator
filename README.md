# nft-collection-generator

<img src="./random.gif" width="100"/>

### Collection metatdata baseURI
  - `ipfs://QmUAFk7DgEfkhp1mBEcWivM96SWAGWsWKEv3sQGXhieLzL/`

### Collection metatdata notRevealedUri
  - `ipfs://QmRipHuCb1JtyzmFBbwxX2GHDwRq4ZAAKLDtAS41pC6aas`

### Prerequisite 
  - NodeJS




### Steps to generate collection
 - Run ``yarn install`` to install dependancies
 - Goto ``config.js``, set attributes and NFT count to be generated
 - Step 1  : Generate random NFT attributes by running command 
 `` node  step1-nft-generator.js``
 - Step 2 : Generate NFT image from generated attributes by running command 
 `` node  step2-image-generator.js``
 - Goto [Pinata](https://www.pinata.cloud/) and login.
 - Upload `generated-nfts/images` folder to host NFT images.
 - Set NFT images folder CID in `step3-create-metadata.js` 
 - Step 3 : Generate NFT Metadata by running command 
 `` node  step3-create-metadata.js``
 - Output of the above steps will be available at `generated-nfts` folder.
 - Upload `generated-nfts/metadata` folder to host NFT metadata.
 - Upload `generated-nfts/not-reveal-metadata.json`  to host not revealed NFT metadata.
