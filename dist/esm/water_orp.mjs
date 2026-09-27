export const name="water_orp";
export const id="dl_449b4e9db864f095d96a";
export const url=new URL("../icons/water_orp.svg?v=e1c851a9d375ca6cfb76d3298f6e0803a6efce14facd91a82a5dd11789e81348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
