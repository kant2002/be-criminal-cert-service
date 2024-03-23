import { GrpcClientFactory, clientCallOptions } from '@kant2002-diia-inhouse/diia-app'

import { RateServiceEventPayload } from '@kant2002-diia-inhouse/analytics'
import {
    AnalyticsServiceClient,
    AnalyticsServiceDefinition,
    GetRatingFormRequest,
    GetRatingFormResponse,
} from '@kant2002-diia-inhouse/analytics-service-client'
import { EventBus, InternalEvent } from '@kant2002-diia-inhouse/diia-queue'
import { ActionVersion, Logger } from '@kant2002-diia-inhouse/types'

import { AppConfig } from '@interfaces/config'

export default class Analytics {
    private readonly analyticsServiceClient: AnalyticsServiceClient

    constructor(
        grpcClientFactory: GrpcClientFactory,
        config: AppConfig,
        private readonly eventBus: EventBus,
        private readonly logger: Logger,
    ) {
        this.analyticsServiceClient = grpcClientFactory.createGrpcClient(
            AnalyticsServiceDefinition,
            config.grpc.analyticsServiceAddress,
            'Analytics',
        )
    }

    async getRatingForm(params: GetRatingFormRequest): Promise<GetRatingFormResponse> {
        const callOptions = clientCallOptions({
            version: ActionVersion.V2,
        })

        return await this.analyticsServiceClient.getRatingForm(params, callOptions)
    }

    async notifyRate(payload: RateServiceEventPayload): Promise<void> {
        try {
            await this.eventBus.publish(InternalEvent.RateService, payload)
        } catch (err) {
            this.logger.error('Failed to publish rate service', { err })
        }
    }
}
