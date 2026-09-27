export const name="skip_next";
export const id="dl_3f5eac631fb1bc7106cb";
export const url=new URL("../icons/skip_next.svg?v=38ff45d650098af1b60ba8f8102cca30b639f32835b1cf716e84b98fec4cdc63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
