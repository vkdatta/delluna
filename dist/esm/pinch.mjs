export const name="pinch";
export const id="dl_d6f9f67a20e1470cafda";
export const url=new URL("../icons/pinch.svg?v=e39a527713d9636552116941c44ff10919a3f5330e63bfd7a7a7660c96810664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
