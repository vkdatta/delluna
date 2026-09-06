export const name="lucid_1-arrow-down-right";
export const id="dl_c2976220519144b8a711";
export const url=new URL("../icons/lucid_1-arrow-down-right.svg?v=8e7b9614a8062f664182264c109190fd4b23f5d4ec37d818b9571afe267e4541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
