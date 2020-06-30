## Open Hardware Monitor ReactJS Web UI

This is a rudimentary UI written in ReactJS that harness the /data.json endpoint of Open Hardware Monitor application.

The /data.json endpoint does not support CORS, therefore this needs to proxy the calls.  This uses the React Proxy that is bundled with the project.

To run, simply execute this in the NodeJS command prompt:

```bash
> npm install
> npm start
```

And point your browser to http://localhost:3000