export const name="looks_6-fill";
export const id="dl_bab75f8c147bcb1302bc";
export const url=new URL("../icons/looks_6-fill.svg?v=eeca3d130dc978e08a263e4f462b6a84e73e3395219f3f740d71e92a6b4c9c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
