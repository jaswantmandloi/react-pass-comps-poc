import axios from 'axios'
import Users from 'services/users'

jest.mock('axios')

describe('Mock test', () => {
  test('Mock test1', () => {
    const users = [{ name: 'Bob' }]
    const resp = { data: users }
    axios.get.mockResolvedValue(resp)

    return Users.all().then(data => expect(data).toEqual(users))
  })
})
