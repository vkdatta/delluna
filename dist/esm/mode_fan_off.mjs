export const name="mode_fan_off";
export const id="dl_f3ad6fed0dc9f792094f";
export const url=new URL("../icons/mode_fan_off.svg?v=30b3e2887c81cbc9eab3c2de60376012d2507acfad8f2868eee7f8fd97992fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
