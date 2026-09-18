export const name="mode_heat_cool";
export const id="dl_16b8458ad4ad4ff7ab6a";
export const url=new URL("../icons/mode_heat_cool.svg?v=eec3501a809b8244ef02472c5adb9c5e255af6b16b90c9fb8c53fc544732501d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
