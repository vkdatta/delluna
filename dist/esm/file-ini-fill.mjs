export const name="file-ini-fill";
export const id="dl_92628173f15d471ebe9f";
export const url=new URL("../icons/file-ini-fill.svg?v=75107a4b06e730c61bd773b19db4fa2b1e57ea069c0fae696ad8679aa7204179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
