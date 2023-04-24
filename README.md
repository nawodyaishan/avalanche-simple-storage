# **Simple Storage Smart Contract on Avalanche Blockchain with Solidity, TypeScript, EVM, HardHat and EthersJS**

This is a simple storage smart contract implemented in Solidity and TypeScript, deployed on the Avalanche network using EVM, and interacted with using the AvalancheJS library.

## **Getting Started**

To get started with this project, follow these steps:

1. Clone the repository to your local machine:
    
    ```
    git clone https://github.com/nawodyaishan/avalanche-simple-storage
    ```
    
    
2. Install the project's dependencies:
    
    ```
    npm install
    ```
    
3. Create a **`.env`** file in the root directory of the project with the following contents:
    
    ```
    PRIVATE_KEY=<your-avalanche-private-key>
    ```
    
    Replace **`<your-avalanche-private-key>`** with your Avalanche private key.
    
4. Compile the Solidity contracts:
    
    ```
    npx hardhat compile
    ```
    
5. Deploy the contracts to the Avalanche network:
    
    ```
    npx hardhat run scripts/deploy.ts --network fuji
    ```
    
6. Interact with the contract:
    
    ```
    npx hardhat run scripts/interact.ts --network fuji
    ```
    

## **Prerequisites**

To use this project, you will need the following:

- Node.js (version 14 or higher)
- An Avalanche wallet with funds for gas
- Hardhat

## **Built With**

- Solidity
- TypeScript
- EVM
- Ethers.js
- Hardhat
