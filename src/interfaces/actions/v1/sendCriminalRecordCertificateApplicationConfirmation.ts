import { UserActionArguments } from '@kant2002-diia-inhouse/types'

import {
    SendCriminalRecordCertificateApplicationConfirmationResponse,
    SendCriminalRecordCertificateApplicationRequest,
} from '@src/generated/criminal-cert-service'

export interface CustomActionArguments extends UserActionArguments {
    params: SendCriminalRecordCertificateApplicationRequest
}

export type ActionResult = SendCriminalRecordCertificateApplicationConfirmationResponse
