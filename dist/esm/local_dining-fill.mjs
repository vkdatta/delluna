export const name="local_dining-fill";
export const id="dl_a6273b8c63e3d2dc1a00";
export const url=new URL("../icons/local_dining-fill.svg?v=69bbabcfa929fd8a2b850968ace454156353858620b847c20aadc13e74564519",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
