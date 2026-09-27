export const name="number-zero-fill";
export const id="dl_e24e7d1ed5db4b0ca11b";
export const url=new URL("../icons/number-zero-fill.svg?v=86e41667fbccf5c5c39a23aad7c860d329775d0c1f346effbef009257c3da45b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
