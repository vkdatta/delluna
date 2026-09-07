export const name="sphere-fill";
export const id="dl_e486e96144c64108b124";
export const url=new URL("../icons/S/sphere-fill.svg?v=c91f5b43104c0245ab8feb2425c4152f00c5904c0e1547a8208dc2ca84684f4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
