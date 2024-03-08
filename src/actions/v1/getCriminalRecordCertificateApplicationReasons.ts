import { GrpcAppAction } from '@diia-inhouse/diia-app'

import { ActionVersion, SessionType } from '@diia-inhouse/types'

import CriminalRecordCertificateService from '@services/criminalRecordCertificate'

import { ActionResult } from '@interfaces/actions/v1/getCriminalRecordCertificateApplicationReasons'

export default class GetCriminalRecordCertificateApplicationReasonsAction implements GrpcAppAction {
    constructor(private readonly criminalRecordCertificateService: CriminalRecordCertificateService) {}

    readonly sessionType: SessionType = SessionType.User

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'getCriminalRecordCertificateApplicationReasons'

    async handler(): Promise<ActionResult> {
        return this.criminalRecordCertificateService.getApplicationReasons()
    }
}
