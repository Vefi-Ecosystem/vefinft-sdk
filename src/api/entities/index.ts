export enum Network {
  BSC = "smartchain",
  BITGERT = "brise"
}

export interface APIResponse<T> {
  result: T;
}

export interface NFTModel {
  tokenId: number;
}
