export const name="business_center-fill";
export const id="dl_7994b9d10880c741c594";
export const url=new URL("../icons/business_center-fill.svg?v=5e7849fcb8cf273b88f0733ecb23a4e09e6fed8cfef7b0539482778f650febf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
