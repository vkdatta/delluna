export const name="scan-duotone";
export const id="dl_16b4d0a99e12c6492ed2";
export const url=new URL("../icons/scan-duotone.svg?v=fd7a10e802e393d44e06129d8ce1cdba3a910b48aabdcda877d79b2ebab2ac4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
