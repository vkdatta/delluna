export const name="devices-duotone";
export const id="dl_441e378c639e44e8ad68";
export const url=new URL("../icons/devices-duotone.svg?v=5bf966d2c963b4ad42703c9614400b53ae67e20edc8a6e4819fff44f9e1f1872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
