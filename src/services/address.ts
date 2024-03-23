import { GrpcClientFactory } from '@kant2002-diia-inhouse/diia-app'

import { AddressServiceClient, AddressServiceDefinition, GetPublicServiceAddressResponse } from '@kant2002-diia-inhouse/address-service-client'

import { AppConfig } from '@interfaces/config'

export default class AddressService {
    private readonly addressServiceClient: AddressServiceClient

    constructor(grpcClientFactory: GrpcClientFactory, config: AppConfig) {
        this.addressServiceClient = grpcClientFactory.createGrpcClient(
            AddressServiceDefinition,
            config.grpc.addressServiceAddress,
            'Address',
        )
    }

    async getPublicServiceAddress(resourceId: string): Promise<GetPublicServiceAddressResponse> {
        return await this.addressServiceClient.getPublicServiceAddress({ resourceId })
    }
}
