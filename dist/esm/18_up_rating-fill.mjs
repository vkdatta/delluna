export const name="18_up_rating-fill";
export const id="dl_67a81e0b566877cf4576";
export const url=new URL("../icons/18_up_rating-fill.svg?v=065106d53a2475f516b0d60448866dcdb0f3a4397b64d468ce3048051bcc0d60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
