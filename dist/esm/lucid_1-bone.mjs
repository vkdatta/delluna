export const name="lucid_1-bone";
export const id="dl_0424b5e9416640ba9645";
export const url=new URL("../icons/lucid_1-bone.svg?v=e72cdec178c5f7695089cf7669b3ad6b16c2d4885cf057afbb3c8cc88fe9fdbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
