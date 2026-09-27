export const name="shutter_speed_minus";
export const id="dl_ad5586c2ee585e035d43";
export const url=new URL("../icons/shutter_speed_minus.svg?v=612d58390968cc30ed25605d17a8e720810059453589fcb4547fe0718e128205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
