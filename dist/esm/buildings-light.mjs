export const name="buildings-light";
export const id="dl_1f0cd87d05f746cb82f1";
export const url=new URL("../icons/buildings-light.svg?v=c4d53a00291b6630fab09355be2235febfd595dfb587a438f6035e574c47fc2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
