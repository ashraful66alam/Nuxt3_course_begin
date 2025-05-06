export default defineEventHandler((event) => {
    setResponseHeaders(event, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    })
  
    const stream = event.node.res
  
    // ✅ Send initial data to establish connection
    stream.write(`data: connected\n\n`)
  
    if (!globalThis.sseClients) globalThis.sseClients = []
    globalThis.sseClients.push(stream)
  
    // Keep connection alive
    const keepAlive = setInterval(() => {
      stream.write(`:\n\n`) // comment/ping to keep the connection alive
    }, 30000)
  
    stream.on('close', () => {
      clearInterval(keepAlive)
      globalThis.sseClients = globalThis.sseClients.filter(c => c !== stream)
    })
  })
  