
export class HashError extends Error {
  constructor(cause?: unknown) {
    super('Hash function throws an error', { cause })
  }
}

export class UnknownAlgorithmError extends Error {
  readonly id: string

  constructor(id: string) {
    super(`Unknown algorithm: ${id}`)
    this.id = id
  }
}

export interface PHCStringInfo {
  id: string
  params: Record<string, string | number>
  version?: number
  hash?: Uint8Array
  salt?: Uint8Array
}

export class InvalidPHCStringError extends Error {

  readonly id: string
  readonly info?: PHCStringInfo

  constructor(id: string, info?: PHCStringInfo) {
    super(`Unknown algorithm: ${id}`)
    this.id = id
    this.info = info
  }
}
