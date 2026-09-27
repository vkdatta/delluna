export const name="lucid_3-map-plus";
export const id="dl_711b4c2343354e569e19";
export const url=new URL("../icons/lucid_3-map-plus.svg?v=d6947e2b6800f438fc29d763f0163606ea7e47b5aa78e15bb55d0411b5609db9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
