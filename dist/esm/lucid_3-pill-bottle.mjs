export const name="lucid_3-pill-bottle";
export const id="dl_95a22a608e3e4e09ba3b";
export const url=new URL("../icons/lucid_3-pill-bottle.svg?v=ad11a6d1abdd1371601efce3c03cedabb5ff340dc632dde4cf378c0c7ba30af8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
