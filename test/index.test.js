import tape from 'tape'
import APICrawler from './src/api.test.js'
import integrityTest from './src/integrity.test.js'

tape('Bytes-utils Test Suite', async t => {

  t.test('API Tests', async t => {
    await APICrawler(t)
  })

  t.test('Integrity Tests', t => {
     integrityTest(t)
  })
  
})
