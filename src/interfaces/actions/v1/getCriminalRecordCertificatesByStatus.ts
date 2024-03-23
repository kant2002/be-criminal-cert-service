import { UserActionArguments } from '@kant2002-diia-inhouse/types'

import { CriminalRecordCertificateList, GetCriminalRecordCertificatesByStatusRequest } from '@src/generated/criminal-cert-service'

export interface CustomActionArguments extends UserActionArguments {
    params: GetCriminalRecordCertificatesByStatusRequest
}

export type ActionResult = CriminalRecordCertificateList
