export const name="phone-disconnect";
export const id="dl_52cafbcac812463182f8";
export const url=new URL("../icons/phone-disconnect.svg?v=42db1ca0f74524a0b9e5d2abbc7d4d8ff6bb2225e66a6ec832195e3a5ea35faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
