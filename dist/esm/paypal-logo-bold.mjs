export const name="paypal-logo-bold";
export const id="dl_c2783a34f1c24ba190bb";
export const url=new URL("../icons/paypal-logo-bold.svg?v=394931b7f43070f7163c1c05225518fe167ed6500171f3e7e7fc97234b7ebd62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
