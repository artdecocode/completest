import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import completest from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof completest, 'function')
  },
  async 'calls package without error'() {
    await completest()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await completest({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T