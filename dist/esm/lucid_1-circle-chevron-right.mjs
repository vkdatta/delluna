export const name="lucid_1-circle-chevron-right";
export const id="dl_059f0dabbec94b9fb9dd";
export const url=new URL("../icons/lucid_1-circle-chevron-right.svg?v=281f37855de0189d6d5596b0f64549cb98d8d1b3d5e8a7313e95353be988de6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
