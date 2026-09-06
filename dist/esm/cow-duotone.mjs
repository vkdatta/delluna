export const name="cow-duotone";
export const id="dl_66c97190b315461f880a";
export const url=new URL("../icons/cow-duotone.svg?v=6ebaa8c42fb6a5c888c3634e257a672664eab835e206fe658541bb8798a63df0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
