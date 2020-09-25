import { Server } from 'http'
import app from './app'

const port = process.env.PORT || 3000
app.set('port', port)

new Server(app).listen(port, () => {
  console.log(`listening on *:${port}`)
})
