export const name="stat_1-fill";
export const id="dl_de0d4b43ab7e49eeb102";
export const url=new URL("../icons/stat_1-fill.svg?v=fa79cefc65256e6891a5d9ae95b70953f3eb67da156385f11438efeaefbede2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
