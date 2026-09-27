export const name="north_east-fill";
export const id="dl_2508b2d6f06dca01b01a";
export const url=new URL("../icons/north_east-fill.svg?v=442381ac2f16b4ec3df753bdfe45e1af591f9b4ee585e3c4c78d9b8b67c0768b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
