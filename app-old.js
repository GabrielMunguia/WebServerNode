console.clear()

const http=require('http');


http.createServer((req,res)=>{
  
    res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    res.writeHead(200,{'content-type':'application/csv'})
    res.write('id,nombre\n')
    res.write('1,juan\n')
    res.write('2,pedro\n')
    res.write('3,Gabriel\n')
    res.write('4,Munguia\n')
    res.end();
}).listen(8080)
console.log('escuchando en el puerto ',8080)