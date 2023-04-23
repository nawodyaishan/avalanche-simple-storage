// @ts-ignore
import {ethers, waffle} from "hardhat";
import {Contract} from "ethers";
import {expect} from "chai";

describe("SimpleStorage", () => {
    let simpleStorage: Contract;

    beforeEach(async () => {
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy();
        await simpleStorage.deployed();
    });

    it("Initial stored data should be 0", async () => {
        const storedData = await simpleStorage.get();
        expect(storedData.toString()).to.equal("0");
    });

    it("Should set stored data to a new value", async () => {
        await simpleStorage.set(42);
        const storedData = await simpleStorage.get();
        expect(storedData.toString()).to.equal("42");
    });
});
