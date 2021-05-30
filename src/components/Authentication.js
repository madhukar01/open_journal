import CeramicClient from '@ceramicnetwork/http-client'
import { ThreeIdConnect, EthereumAuthProvider } from '@3id/connect'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { DID } from 'dids'

async function Authenticate() {
    // Create ceramic client - Testnet URL
    const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");

    // Create 3ID resolver
    const resolver = {
        ...ThreeIdResolver.getResolver(ceramic)
    }
    const did = new DID({ resolver })
    ceramic.setDID(did)

    // Request users wallet address - Ethereum wallet
    const addresses = await window.ethereum.enable()
    console.log("Authentication: ", addresses[0])
    const authData = {
        "loggedIn": "FALSE",
        "ceramic": ceramic,
        "address": addresses
    }

    if (addresses.length < 1) {
        return authData
    }

    var loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn == "TRUE") {
        authData.loggedIn = "TRUE"
        authData.address = addresses[0]
        return authData
    }
    // Authenticate 3ID with the wallet
    const threeIdConnect = new ThreeIdConnect()
    const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
    await threeIdConnect.connect(authProvider)

    // Create 3ID provider
    const provider = await threeIdConnect.getDidProvider()

    // Set the 3ID provider to ceramic
    ceramic.did.setProvider(provider)

    // Only for sign in
    // Authenticate ceramic with 3ID
    var res = await ceramic.did.authenticate()
    console.log(res)
    localStorage.setItem("loggedIn", "TRUE");
    authData.loggedIn = "TRUE"
    authData.address = addresses[0]
    return authData
};
export default Authenticate
