import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { isMessageDataOfType } from '../src/message.ts'

describe('isMessageDataOfType', () => {
  for (const data of [undefined, null, true, 1, 'frameEvent']) {
    it(`rejects non-object message data: ${String(data)}`, () => {
      assert.equal(isMessageDataOfType(data, 'frameEvent'), false)
    })
  }

  it('rejects objects with a different or missing type', () => {
    assert.equal(isMessageDataOfType({}, 'frameEvent'), false)
    assert.equal(isMessageDataOfType({ type: 'other' }, 'frameEvent'), false)
  })

  it('accepts message data with the expected type', () => {
    assert.equal(
      isMessageDataOfType({ type: 'frameEvent', event: {} }, 'frameEvent'),
      true,
    )
  })
})
