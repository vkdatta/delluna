export const name="shutter_speed";
export const id="dl_207ce75b01c9fd5d2302";
export const url=new URL("../icons/shutter_speed.svg?v=8b07d6c909f4de334c5ef7f43f8f506c1fb649c6ca315ce3cd7587a35e078910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
