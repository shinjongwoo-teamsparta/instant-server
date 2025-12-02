const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// CORS 미들웨어 추가
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 모든 origin 허용
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // OPTIONS 요청(preflight)에 대한 응답
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

server.use(middlewares);
server.use(router);

const PORT = 8000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server is running on http://0.0.0.0:${PORT}`);
});