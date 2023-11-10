import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === 'GET' && url === '/users') {
        return res.end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Alefe Rocha',
            email: 'alefe.rocha@email.com'
        })

        return res.end(JSON.stringify('Usuário criado com sucesso'))
    }

    return res.end('Hello World')
})

server.listen(3333)