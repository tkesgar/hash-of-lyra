import { describe, expect, it, test } from 'vitest'
import { hash } from '../hash'
import { testHashArgon2, testHashPBKDF2, testHashScrypt } from './fixtures/vectors'
import format from '@phc/format'
import { phcIdToAlgorithm } from '../utils'

import.meta.env.ALLOW_SHA1_HASH = 'OK'

describe('hash', () => {
  describe('argon2', () => {
    it.each(testHashArgon2)('should generate correct hash ($hash)', async (tc) => {
      const testPhc = format.deserialize(tc.hash)
      const phcString = await hash(tc.password, {
        algorithm: testPhc.id as any,
        ...testPhc.params! as any,
        salt: testPhc.salt!,
      })

      const phc = format.deserialize(phcString)
      expect(phc).toEqual(testPhc)
    })
  })

  describe('pbkdf2', () => {
    it.each(testHashPBKDF2)('should generate correct hash ($hash)', async (tc) => {
      const testPhc = format.deserialize(tc.hash)
      const phcString = await hash(tc.password, {
        ...phcIdToAlgorithm(testPhc.id),
        ...testPhc.params! as any,
        salt: testPhc.salt!,
      })

      const phc = format.deserialize(phcString)
      expect(phc).toEqual(testPhc)
    })
  })

  describe('scrypt', () => {
    it.each(testHashScrypt)('should generate correct hash ($hash)', async (tc) => {
      const testPhc = format.deserialize(tc.hash)
      const phcString = await hash(tc.password, {
        algorithm: 'scrypt',
        ...testPhc.params! as any,
        lN: testPhc.params!.ln! as any,
        salt: testPhc.salt!,
      })

      const phc = format.deserialize(phcString)
      expect(phc).toEqual(testPhc)
    })
  })
})
