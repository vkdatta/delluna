export const name="moving_beds-fill";
export const id="dl_24dec0f8479d129ca281";
export const url=new URL("../icons/moving_beds-fill.svg?v=1a978587fd8a7c5ce24905c78f0eee483bf84951e764db8c5abf072e00faf694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
