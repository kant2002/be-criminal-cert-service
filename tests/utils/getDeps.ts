import { asClass } from 'awilix'

import { DepsFactoryFn } from '@kant2002-diia-inhouse/diia-app'

import { IdentifierService } from '@kant2002-diia-inhouse/crypto'
import TestKit from '@kant2002-diia-inhouse/test'

import deps from '@src/deps'

import { TestDeps } from '@tests/interfaces'

import { AppConfig } from '@interfaces/config'
import { AppDeps } from '@interfaces/deps'

export default (config: AppConfig): ReturnType<DepsFactoryFn<AppConfig, AppDeps & TestDeps>> => {
    return {
        ...deps(config),
        testKit: asClass(TestKit).singleton(),
        identifier: asClass(IdentifierService, { injector: () => ({ identifierConfig: { salt: 'TEST_SALT' } }) }).singleton(),
    }
}
