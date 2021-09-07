/* eslint-disable @typescript-eslint/no-var-requires */
const crypt = require('crypto');
const base64Url = require('base64-url');

const header = {
  alg: 'HS256', // Hmac + sha256
  typ: 'JWT',
};

// corpo de dados - dados principais do token
const payload = {
  username: 'user!@user.com',
  name: 'Samanta Fluture',
  exp: new Date().getTime(), // timestamp
};

// carimbo, chave secreta, variável de ambiente, pelo menos 32 caracteres
const key = 'abcd123456';

// codificar essas infos em base64

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

// console.log(headerEncoded, payloadEncoded);

const signature = crypt
  .createHmac('sha256', key)
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('bin');

// console.log(signature);

console.log(
  `${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`,
);
