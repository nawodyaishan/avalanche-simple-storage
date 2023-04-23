import {Contract, providers} from "@ethersproject/contracts";
import {Web3Provider} from "@ethersproject/providers";
import {SimpleStorage as SimpleStorageABI} from "../contracts/SimpleStorage.json";

const main = async () => {
    const provider = new Web3Provider(new providers.JsonRpcProvider("<network-url>"));
    const signer = provider.getSigner();

    const contract = new Contract(
        "<contract-address>",
        SimpleStorageABI.abi,
        signer
    );

    const value = await contract.get();
    console.log("Retrieved value:", value.toString());

    await contract.set(42);
    console.log("Set value to 42");

    const newValue = await contract.get();
    console.log("Retrieved value:", newValue.toString());
};

main()
    .then(() => {
        console.log("Done");
    })
    .catch((error) => {
        console.error(error);
    });