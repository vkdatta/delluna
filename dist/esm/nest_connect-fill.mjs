export const name="nest_connect-fill";
export const id="dl_d2d81e2d4f8b4f989dbc";
export const url=new URL("../icons/nest_connect-fill.svg?v=2f878790aa9f377fb900fd8e0fcd1b73b3cf5012818eca533e8511c0978c9632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
