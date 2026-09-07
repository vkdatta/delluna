export const name="tree-structure-fill";
export const id="dl_9c290c611270456dbbf3";
export const url=new URL("../icons/T/tree-structure-fill.svg?v=8299e150bb8d5faaafaf3a42d185b94bb2d9b2329ff2f03e4f96f87007e9d2a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
