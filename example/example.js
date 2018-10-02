/* yarn example/ */
import completest from '../src'

(async () => {
  const res = await completest({
    text: 'example',
  })
  console.log(res)
})()