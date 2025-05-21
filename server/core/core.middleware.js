import AppLogger from "./core.logs.js"

const useURL= (req,res,next)=>{
    AppLogger.logDebug(req.method,req.url)
    next()
}

const appMiddlewares = [
    useURL
]

export default appMiddlewares