export const name="arrow-square-down-left-fill";
export const id="dl_88bb6701031a4237a1ff";
export const url=new URL("../icons/arrow-square-down-left-fill.svg?v=8476ab5125036ed6151f99b6efc28ea8d247c28f2f9a02ca095e76049ea790b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
