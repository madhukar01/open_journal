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

    // // Authenticate 3ID with the wallet
    const threeIdConnect = new ThreeIdConnect()
    const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
    await threeIdConnect.connect(authProvider)

    // Create 3ID provider
    const provider = await threeIdConnect.getDidProvider()

    // Set the 3ID provider to ceramic
    ceramic.did.setProvider(provider)

    // Authenticate ceramic with DID
    await ceramic.did.authenticate()

    const authData = {
        "loggedIn": true,
        "ceramic": ceramic,
        "address": ''
    }
    return authData
};
export default Authenticate
