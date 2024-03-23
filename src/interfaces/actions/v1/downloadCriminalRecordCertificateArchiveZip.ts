import { UserActionArguments } from '@kant2002-diia-inhouse/types'

import {
    DownloadCriminalRecordCertificateArchiveZipRequest,
    DownloadCriminalRecordCertificateArchiveZipResponse,
} from '@src/generated/criminal-cert-service'

export interface CustomActionArguments extends UserActionArguments {
    params: DownloadCriminalRecordCertificateArchiveZipRequest
}

export type ActionResult = DownloadCriminalRecordCertificateArchiveZipResponse
