# error-kit-demo

A demo project showcasing how to implement the @nurhanna01/error-kit package for custom error handling in a Node.js application.

### How to run

```bash
git clone https://github.com/nurhanna01/error-kit-demo.git
```

```bash
cd error-kit-demo
```

```bash
npm install
```

```bash
npm run start:dev
```

### How to test

#### test bad request use the badRequest function

curl --location 'http://localhost:3000/user/bad-request'

#### test bad request use AppError function

curl --location 'http://localhost:3000/user/test'
