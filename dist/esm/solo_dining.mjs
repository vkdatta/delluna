export const name="solo_dining";
export const id="dl_c247b725cf90484b8c3a";
export const url=new URL("../icons/solo_dining.svg?v=64f339ca67befd21aa21d5b9f9521eed2b1ac315723134eb121d26f3929354e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
