export const name="phone_locked";
export const id="dl_f6540e3a1c6283a262f9";
export const url=new URL("../icons/phone_locked.svg?v=ebf34ba604ef4a6e27f638e34b75565b00d37376523942521cc30b5c9071ac20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
