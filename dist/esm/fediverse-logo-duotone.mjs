export const name="fediverse-logo-duotone";
export const id="dl_02b342dd56004bb3b7f8";
export const url=new URL("../icons/fediverse-logo-duotone.svg?v=2865c0181dd7606c25f322e1fe449514ec858b844ef666d023dba94a03aeea1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
