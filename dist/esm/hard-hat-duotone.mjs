export const name="hard-hat-duotone";
export const id="dl_700bd29af3a74c658ab3";
export const url=new URL("../icons/hard-hat-duotone.svg?v=87a1858c2694784a857c5f5137b743d308173bc2d0225ea01eab30cc9cae7f91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
