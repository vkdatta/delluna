export const name="propane_tank-fill";
export const id="dl_08eb69408b704685b8fd";
export const url=new URL("../icons/propane_tank-fill.svg?v=83510da463974da709a445c52a176f488ced73d103fea79ea0c87511ea3adf76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
