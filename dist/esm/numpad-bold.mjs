export const name="numpad-bold";
export const id="dl_50bfd7a8c4be43e98afb";
export const url=new URL("../icons/numpad-bold.svg?v=b3c6ec62f0f87e6b31ed3788e7a527d44411ddda31fe8f3f596aa39e5a86a68b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
