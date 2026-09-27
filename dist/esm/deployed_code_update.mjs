export const name="deployed_code_update";
export const id="dl_ec53191a93c044991bd7";
export const url=new URL("../icons/deployed_code_update.svg?v=f3f4775dcebb0ee976605db6a9a86cb7e3e84fdcc4dc5fa7371c4f13ec6b7396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
