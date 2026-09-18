export const name="shutter_speed_add-fill";
export const id="dl_170af3aeb4f34a64aae3";
export const url=new URL("../icons/shutter_speed_add-fill.svg?v=721ee14b25617cdcc3e738f9004b18524cfd2355607f4d0de86a99e9de593fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
