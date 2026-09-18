export const name="shaved_ice";
export const id="dl_5a11b3a00b5d4c378249";
export const url=new URL("../icons/S/shaved_ice.svg?v=73aa80531a5983ac3bf79bcfe32233a10a711f978150f2636fcc0a03f56b13cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
