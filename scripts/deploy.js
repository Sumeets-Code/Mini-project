async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  // Start deployment, returning a promise that resolves to a contract object
  const MyContract = await Voting.deploy(["Sumeet", "Anoushka", "Shreyash", "Bhanavi"], 90);
  console.log("Contract address:", MyContract.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });