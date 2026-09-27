export const name="roller_shades_closed";
export const id="dl_3da2b65b6f072d799c2f";
export const url=new URL("../icons/roller_shades_closed.svg?v=93fd37be3ea42b273488a499ed02e7ffbafd4257bffe5c791ffb3ba1e3360a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
