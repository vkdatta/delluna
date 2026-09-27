export const name="stairs-fill";
export const id="dl_a0c9576eedf362d0dd84";
export const url=new URL("../icons/stairs-fill.svg?v=2839bfa01f930ec60514eeba4520b3c34ddca0d01c3394f62cd8d66bc6b88353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
