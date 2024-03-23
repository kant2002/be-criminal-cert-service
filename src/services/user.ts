import { GrpcClientFactory, clientCallOptions } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion } from '@kant2002-diia-inhouse/types'
import { DocumentFilter, GetUserDocumentsResponse, UserServiceClient, UserServiceDefinition } from '@kant2002-diia-inhouse/user-service-client'

import { AppConfig } from '@interfaces/config'

export default class UserService {
    private readonly userServiceClient: UserServiceClient

    constructor(grpcClientFactory: GrpcClientFactory, config: AppConfig) {
        this.userServiceClient = grpcClientFactory.createGrpcClient(UserServiceDefinition, config.grpc.userServiceAddress, 'User')
    }

    async getUserDocuments(userIdentifier: string, filters: DocumentFilter[]): Promise<GetUserDocumentsResponse> {
        const callOptions = clientCallOptions({ version: ActionVersion.V2 })

        const userDocuments = await this.userServiceClient.getUserDocuments({ userIdentifier, filters }, callOptions)

        return userDocuments
    }
}
