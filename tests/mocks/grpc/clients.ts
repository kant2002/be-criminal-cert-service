import { GrpcClientFactory } from '@kant2002-diia-inhouse/diia-app'

import { CryptoDocServiceDefinition } from '@kant2002-diia-inhouse/diia-crypto-client'
import DiiaLogger from '@kant2002-diia-inhouse/diia-logger'
import { MetricsService } from '@kant2002-diia-inhouse/diia-metrics'
import { PublicServiceCatalogDefinition } from '@kant2002-diia-inhouse/public-service-catalog-client'
import { mockInstance } from '@kant2002-diia-inhouse/test'

const grpcClientFactory = new GrpcClientFactory('CriminalCert', new DiiaLogger(), mockInstance(MetricsService))

export const cryptoDocServiceClient = grpcClientFactory.createGrpcClient(CryptoDocServiceDefinition, 'test', 'crypto')

export const publicServiceCatalogClient = grpcClientFactory.createGrpcClient(PublicServiceCatalogDefinition, 'test', 'PublicService')
