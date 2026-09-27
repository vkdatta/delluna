export const name="cow-duotone";
export const id="dl_66c97190b315461f880a";
export const url=new URL("../icons/cow-duotone.svg?v=cc43cfd82d736b348175bd84759d1f91bfadb8c81d971000e753754b7ab6285e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
