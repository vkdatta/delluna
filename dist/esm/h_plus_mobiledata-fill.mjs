export const name="h_plus_mobiledata-fill";
export const id="dl_1168d6ef5714523c5e8a";
export const url=new URL("../icons/h_plus_mobiledata-fill.svg?v=e14db7a150a14eaf8c20a31379d48bc171c35187a74c0d75d0de043e5c61d7e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
