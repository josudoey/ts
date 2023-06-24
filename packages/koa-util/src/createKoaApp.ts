import Koa from 'koa'

export interface KoaOptions {
  env?: string | undefined
  keys?: string[] | undefined
  proxy?: boolean | undefined
  subdomainOffset?: number | undefined
  proxyIpHeader?: string | undefined
  maxIpsCount?: number | undefined
}

export function createKoaApp (option?: KoaOptions): Koa {
  return new Koa(option)
}
