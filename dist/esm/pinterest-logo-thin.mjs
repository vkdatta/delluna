export const name="pinterest-logo-thin";
export const id="dl_fcc3b0f550ba4b5aa70a";
export const url=new URL("../icons/pinterest-logo-thin.svg?v=aaba281a843f2a81c001ef3843e16ee29c4c81339fa50f7127216e8f611b08ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
