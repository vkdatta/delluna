export const name="tools_ladder-fill";
export const id="dl_3f4737ea49bf991e582c";
export const url=new URL("../icons/tools_ladder-fill.svg?v=1c109d8d36697f4e665e2d2b47219cbd03ea800405657e3b2226597a2f611986",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
