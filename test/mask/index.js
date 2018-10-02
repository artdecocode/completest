import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import completest from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await completest({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts