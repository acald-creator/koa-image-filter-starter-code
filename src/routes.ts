import Router from "koa-router";
import { deleteLocalFiles, filterImageFromURL } from "./util/util";

const customRoutes = new Router()

customRoutes.get("/", (ctx, next) => {
    ctx.body = 'Try GET /filteredimage?image_url={{}}'
})

customRoutes.get("/filteredimage", (ctx, next) => {
    let { image_url } = ctx.query as any

    if (!image_url) {
        ctx.body = 'Invalid URL or no URL provided.'
        ctx.response.status = 400
    }

    filterImageFromURL(image_url).then(filteredpath => {
        ctx.response.status = 200
        return filteredpath
    })
})

export { customRoutes }