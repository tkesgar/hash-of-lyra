import { afterAll, beforeAll, describe, expect, it, test } from 'vitest'
import { hash, HashAlgorithm } from '../hash'
import { testHashArgon2, testHashPBKDF2, testHashScrypt } from './fixtures/vectors'
import format from '@phc/format'
import { phcIdToAlgorithm } from '../utils'

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
    describe('generate correct hash', () => {
      beforeAll(() => {
        process.env.ALLOW_SHA1_HASH = 'OK'
      })

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

      afterAll(() => {
        delete process.env.ALLOW_SHA1_HASH
      })
    })

    it('should not allow PBKDF2 with digest = sha1', async ({ expect }) => {
      await expect(() => {
        return hash('password', { algorithm: HashAlgorithm.PBKDF2, i: 1000, digest: 'sha1' })
      }).rejects.toThrowError('PBKDF2 hash with SHA1 is not allowed')
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
