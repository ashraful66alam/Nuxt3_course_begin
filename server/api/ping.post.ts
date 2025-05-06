export default defineEventHandler(async (event) => {
    const body = await readBody(event) // <- Read JSON sent by Postman
  
    const dataToSend = {
      type: 'ping',
      message: body.message || 'No message received'
    }
  
    // Push to all connected clients via SSE
    if (globalThis.sseClients) {
      for (const client of globalThis.sseClients) {
        client.write(`data: ${JSON.stringify(dataToSend)}\n\n`)
      }
    }
  
    return { success: true }
  })
  