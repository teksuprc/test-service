

## install and configure serverless-offline

    #### install

    npm i -D serverless-offline


    #### configure

    ***serverless.yml***
```
plugins:
  - serverless-offline

custom:
  serverless-offline:
    httpsProtocol: "dev-certs"
    port: 4000
```

    #### run

    ```
    serverless offline start


## self signed certificate

```
openssl req -nodes -new -x509 -keyout key.pem -out cert.pem
```



