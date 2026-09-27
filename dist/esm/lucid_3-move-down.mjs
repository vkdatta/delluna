export const name="lucid_3-move-down";
export const id="dl_cf16da18b3fd4d1295fa";
export const url=new URL("../icons/lucid_3-move-down.svg?v=e0083c557e1db6dbf68afc38601c85c5a019ab2e88d350735d15ae27687966dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
