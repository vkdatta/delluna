export const name="check-square-fill";
export const id="dl_0ebd995df8894275b72c";
export const url=new URL("../icons/check-square-fill.svg?v=f21147abf6f02a3881225bf50199ce2fffbec75a23f8e3245402bd72a75b912c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
