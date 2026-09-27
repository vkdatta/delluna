export const name="mode_heat_off-fill";
export const id="dl_d8e165b32f9f0fc6449f";
export const url=new URL("../icons/mode_heat_off-fill.svg?v=b970be333d5a3c390a80b174753038da9f79f19526035c883930b756ac5c398e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
