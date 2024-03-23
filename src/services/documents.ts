import { GrpcClientFactory, clientCallOptions } from '@kant2002-diia-inhouse/diia-app'

import {
    DocumentsServiceClient,
    DocumentsServiceDefinition,
    GetIdentityDocumentResponse,
    GetInternalPassportWithRegistrationResponse,
} from '@kant2002-diia-inhouse/documents-service-client'
import { ActionVersion, UserTokenData } from '@kant2002-diia-inhouse/types'
import { utils } from '@kant2002-diia-inhouse/utils'

import { AppConfig } from '@interfaces/config'

export default class DocumentsService {
    private readonly documentsServiceClient: DocumentsServiceClient

    constructor(grpcClientFactory: GrpcClientFactory, config: AppConfig) {
        this.documentsServiceClient = grpcClientFactory.createGrpcClient(
            DocumentsServiceDefinition,
            config.grpc.documentsServiceAddress,
            'Documents',
        )
    }

    async getIdentityDocument(user: UserTokenData): Promise<GetIdentityDocumentResponse | undefined> {
        const callOptions = clientCallOptions({
            session: utils.makeSession(user),
            version: ActionVersion.V3,
        })

        const identityDocument = await this.documentsServiceClient.getIdentityDocument({}, callOptions)

        return identityDocument
    }

    async getInternalPassportWithRegistration(
        user: UserTokenData,
        digitalPassportRegistration = false,
    ): Promise<GetInternalPassportWithRegistrationResponse> {
        const callOptions = clientCallOptions({
            session: utils.makeSession(user),
            version: ActionVersion.V1,
        })

        return await this.documentsServiceClient.getInternalPassportWithRegistration({ digitalPassportRegistration }, callOptions)
    }
}
