export const name="stethoscope-light";
export const id="dl_04ae609ae6a349258ac2";
export const url=new URL("../icons/S/stethoscope-light.svg?v=6e8de5f0f61fea6a55057d98586866f7532087b887d026782aaeda5e88ae112f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
