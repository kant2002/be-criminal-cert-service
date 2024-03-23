import { randomUUID } from 'crypto'

import { merge } from 'lodash'

import { DocStatus, DocumentType, OwnerType } from '@kant2002-diia-inhouse/types'
import { UserDocument } from '@kant2002-diia-inhouse/user-service-client'

export const getTaxpayerCardUserDocument = (data: Partial<UserDocument> = {}): UserDocument => {
    return merge(
        {
            userIdentifier: randomUUID(),
            documentIdentifier: randomUUID(),
            ownerType: OwnerType.owner,
            docStatus: DocStatus.Ok,
            documentType: DocumentType.TaxpayerCard,
            notifications: {},
        },
        data,
    )
}
