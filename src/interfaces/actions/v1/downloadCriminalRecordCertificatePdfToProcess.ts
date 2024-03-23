import { ServiceActionArguments } from '@kant2002-diia-inhouse/types'

import {
    DownloadCriminalRecordCertificatePdfToProcessRequest,
    DownloadCriminalRecordCertificatePdfToProcessResponse,
} from '@src/generated/criminal-cert-service'

export interface CustomActionArguments extends ServiceActionArguments {
    params: DownloadCriminalRecordCertificatePdfToProcessRequest
}

export type ActionResult = DownloadCriminalRecordCertificatePdfToProcessResponse
