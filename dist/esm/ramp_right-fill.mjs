export const name="ramp_right-fill";
export const id="dl_519088440a8f05603cfb";
export const url=new URL("../icons/ramp_right-fill.svg?v=93fa383ac6966180839789b4c20f10dc20fde9ea2e3d76effd4981474b0cb22c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
