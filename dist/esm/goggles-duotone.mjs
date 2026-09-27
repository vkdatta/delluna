export const name="goggles-duotone";
export const id="dl_ffec382b887b4ce99695";
export const url=new URL("../icons/goggles-duotone.svg?v=0f9107a2200209aa5748131907af58907426c3c2b1af71fac450492d18809105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
