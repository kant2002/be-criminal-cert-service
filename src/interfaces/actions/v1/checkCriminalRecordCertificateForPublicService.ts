import { ServiceActionArguments } from '@kant2002-diia-inhouse/types'

import {
    CheckCriminalRecordCertificateForPublicServiceRequest,
    CheckCriminalRecordCertificateForPublicServiceResponse,
} from '@src/generated/criminal-cert-service'

export interface CustomActionArguments extends ServiceActionArguments {
    params: CheckCriminalRecordCertificateForPublicServiceRequest
}

export type ActionResult = CheckCriminalRecordCertificateForPublicServiceResponse
