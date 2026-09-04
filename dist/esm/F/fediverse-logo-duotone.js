export const name="fediverse-logo-duotone";
export const id="dl_02b342dd56004bb3b7f8";
export const url=new URL("../../icons/F/fediverse-logo-duotone.svg?v=2865c0181dd7606c25f322e1fe449514ec858b844ef666d023dba94a03aeea1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
