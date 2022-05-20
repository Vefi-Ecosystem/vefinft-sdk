export enum Network {
  BSC = "smartchain",
  BITGERT = "brise"
}

export interface APIResponse<T> {
  result: T;
}

type NFTMetadata = {
  name: string;
  owner: string;
  description: string;
  symbol: string;
  traits: any[];
  imageURI: string;
};

type CollectionMetadata = {
  name: string;
  owner: string;
  description: string;
  category: string;
  imageURI: string;
  bannerURI: string;
};

export interface NFTModel {
  tokenId: number;
  owner: string;
  tokenURI: string;
  network: string;
  collectionId: string;
  timeStamp: number;
  metadata: NFTMetadata;
}

export interface CollectionModel {
  collectionId: string;
  timeStamp: number;
  collectionName: string;
  collectionCategory: string;
  collectionSymbol: string;
  collectionOwner: string;
  collectionURI: string;
  network: string;
  metadata: CollectionMetadata;
}
