import KoaRouter from 'koa-router'

export type KoaRouterOptions = KoaRouter.IRouterOptions
export function createKoaRouter (opts: KoaRouter.IRouterOptions): KoaRouter {
  return new KoaRouter(opts)
}
