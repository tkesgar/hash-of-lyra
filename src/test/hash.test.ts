import { describe, expect, it, test } from 'vitest'
import { hash, HashAlgorithm } from '../hash'
import { testHash } from './fixtures/vectors'
import format from '@phc/format'

describe('hash', () => {
  it.each(
    testHash
  )('should generate correct hash', async (tc) => {
    const testPhc = format.deserialize(tc.hash)
    const phcString = await hash(tc.password, {
      algorithm: testPhc.id as any,
      m: testPhc.params!.m as number,
      t: testPhc.params!.t as number,
      p: testPhc.params!.p as number,
      salt: testPhc.salt!
    })

    const phc = format.deserialize(phcString)
    expect(phc).toEqual(testPhc)
  })
})
