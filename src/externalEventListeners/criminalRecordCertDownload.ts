import { EventBusListener, ExternalEvent } from '@kant2002-diia-inhouse/diia-queue'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

export default class CriminalRecordCertDownloadEventListener implements EventBusListener {
    readonly event: ExternalEvent = ExternalEvent.PublicServiceCriminalRecordCertDownload

    readonly isSync: boolean = true

    readonly validationRules: ValidationSchema = {
        document: { type: 'string', optional: true },
        signature: { type: 'string', optional: true },
    }
}
