export const name="cigarette-fill";
export const id="dl_6256e892dad442bc8819";
export const url=new URL("../icons/cigarette-fill.svg?v=02f1571aa4a69fef2aa16688c623c15c107a5605076054bc25a3994c937d2334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
