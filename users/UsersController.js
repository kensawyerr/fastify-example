class Users{
  static getUser(request, response){
    const dbData =  [
      {id: 4, username: 'John', location: 'Rivers', age: 20, password: '13w413rfdf29r2p34r2r'},
    ]

    response.send(dbData)
  }
}

module.exports = Users