export const name="lucid_2-footprints";
export const id="dl_77f6d1261e9048fa9284";
export const url=new URL("../icons/lucid_2-footprints.svg?v=0f0098f228bd1ae765f3b109a47b725f27b524a04d5934cd762fc748f8421acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
