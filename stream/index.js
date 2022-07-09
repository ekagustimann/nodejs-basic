const fs = require('fs')
const { resolve, dirname } = require('path')

const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
})

const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'))

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`)
    } catch (error) {
        console.log('Gagal membaca berkas!')
        console.log(error.message)
    }
})