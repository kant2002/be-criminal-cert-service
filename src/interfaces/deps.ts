import { GrpcService } from '@kant2002-diia-inhouse/diia-app'

import { AnalyticsService } from '@kant2002-diia-inhouse/analytics'
import { DatabaseService } from '@kant2002-diia-inhouse/db'
import { CryptoDocServiceClient, CryptoServiceClient } from '@kant2002-diia-inhouse/diia-crypto-client'
import { QueueDeps } from '@kant2002-diia-inhouse/diia-queue'
import { HealthCheck } from '@kant2002-diia-inhouse/healthcheck'
import { PublicServiceCatalogClient } from '@kant2002-diia-inhouse/public-service-catalog-client'

import { AppConfig } from '@src/interfaces/config'

export interface GrpcClientsDeps {
    cryptoServiceClient: CryptoServiceClient
    cryptoDocServiceClient: CryptoDocServiceClient
    publicServiceCatalogClient: PublicServiceCatalogClient
}

export type AppDeps = {
    config: AppConfig
    healthCheck: HealthCheck
    analytics: AnalyticsService
    database: DatabaseService
    grpcService: GrpcService
} & Partial<QueueDeps> &
    GrpcClientsDeps
