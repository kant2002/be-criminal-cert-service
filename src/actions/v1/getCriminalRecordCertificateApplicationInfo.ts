import { AppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, PublicServiceCode, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import CriminalRecordCertificateService from '@services/criminalRecordCertificate'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v1/getCriminalRecordCertificateApplicationInfo'

export default class GetCriminalRecordCertificateApplicationInfo implements AppAction {
    constructor(private readonly criminalRecordCertificateService: CriminalRecordCertificateService) {}

    readonly sessionType: SessionType = SessionType.User

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'getCriminalRecordCertificateApplicationInfo'

    readonly validationRules: ValidationSchema<CustomActionArguments['params']> = {
        publicService: { type: 'string', enum: Object.values(PublicServiceCode), optional: true },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const {
            session: { user },
            params: { publicService },
            headers,
        } = args

        return await this.criminalRecordCertificateService.getApplicationInfo(user, headers, publicService)
    }
}
