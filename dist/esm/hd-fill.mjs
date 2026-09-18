export const name="hd-fill";
export const id="dl_03d300cbe8f143f7a080";
export const url=new URL("../icons/hd-fill.svg?v=d02df182749f2e99d91c97c2ebf81a20d6ba1eb51b573f0e479936ec8365504c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
