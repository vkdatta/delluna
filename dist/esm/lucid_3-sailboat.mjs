export const name="lucid_3-sailboat";
export const id="dl_a7564e1b67d84cb6befc";
export const url=new URL("../icons/lucid_3-sailboat.svg?v=4db86f0260a1bb475f5ecb0e005a9abe336ad5894587cfd02d622b098bb76734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
