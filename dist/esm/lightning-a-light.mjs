export const name="lightning-a-light";
export const id="dl_d0b6537ef6154ac8995b";
export const url=new URL("../icons/lightning-a-light.svg?v=9c85f04dc4a01ca845929a51822d233549106dfad3f3233d92c14ee3c65723dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
