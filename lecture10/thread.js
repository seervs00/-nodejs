process.env.UV_THREADPOOL_SIZE = 8;
console.log('UV_THREADPOOL_SIZE:', process.env.UV_THREADPOOL_SIZE);
const crypto = require('crypto');
const start = Date.now();

// Run a thread pool-intensive operation to test
for (let i = 0; i < 10; i++) {
  crypto.pbkdf2('password', 'salt', 5000000, 64, 'sha512', () => {
    console.log(`${i + 1}: ${Date.now() - start}ms`);
  });
}
