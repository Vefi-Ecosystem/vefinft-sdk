import axios from "axios";
import * as CONSTANTS from "./constants";
import type { Network, APIResponse, NFTModel } from "./entities";

const baseAxios = axios.create({
  baseURL: ""
});

export function getAllNFTsByNetwork(network: Network): Promise<APIResponse<Array<NFTModel>>> {
  return new Promise((resolve, reject) => {
    baseAxios
      .get(CONSTANTS.ALL_NFTs_BY_NETWORK.replace(":network", network))
      .then((res) => resolve(res.data))
      .catch(reject);
  });
}

export function getNFTById(network: Network, collectionId: string, tokenId: number): Promise<APIResponse<NFTModel>> {
  return new Promise((resolve, reject) => {
    baseAxios
      .get(
        CONSTANTS.NFT_BY_ID.replace(":network", network)
          .replace(":collectionId", collectionId)
          .replace(":tokenId", tokenId.toString())
      )
      .then((res) => resolve(res.data))
      .catch(reject);
  });
}

export function getNFTsByCollection(network: Network, collectionId: string): Promise<APIResponse<Array<NFTModel>>> {
  return new Promise((resolve, reject) => {
    baseAxios
      .get(CONSTANTS.ALL_NFTs_BY_COLLECTION.replace(":network", network).replace(":collectionId", collectionId))
      .then((res) => resolve(res.data))
      .catch(reject);
  });
}
