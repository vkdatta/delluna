export const name="grid_3x3-fill";
export const id="dl_e8e7a2b12f7d5c5495f8";
export const url=new URL("../icons/grid_3x3-fill.svg?v=aaa8b505c4275a0765c3daae078cf0b0a9fdea65e7c418ab9ad495d89c49a791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
