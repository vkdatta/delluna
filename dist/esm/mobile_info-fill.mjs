export const name="mobile_info-fill";
export const id="dl_4915c63b58c349538e33";
export const url=new URL("../icons/mobile_info-fill.svg?v=e33ca1c98eef6374f82b2905b395c8f71b39f33e07db289f19e23ba2f0fe08bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
