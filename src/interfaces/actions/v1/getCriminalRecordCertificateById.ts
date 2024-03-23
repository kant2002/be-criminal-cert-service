import { UserActionArguments } from '@kant2002-diia-inhouse/types'

import { GetCriminalRecordCertificateByIdRequest, GetCriminalRecordCertificateByIdResponse } from '@src/generated/criminal-cert-service'

export interface CustomActionArguments extends UserActionArguments {
    params: GetCriminalRecordCertificateByIdRequest
}

export type ActionResult = GetCriminalRecordCertificateByIdResponse
