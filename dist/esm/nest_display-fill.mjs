export const name="nest_display-fill";
export const id="dl_29f44c9941778c093bb4";
export const url=new URL("../icons/nest_display-fill.svg?v=694768398a2050b265c1b35ef80faea3a83026ecf1b6666735cff2025e817df6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
