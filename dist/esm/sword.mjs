export const name="sword";
export const id="dl_cd574fec96604b9fba73";
export const url=new URL("../icons/S/sword.svg?v=faca62b2129859d504c06f2be8d42be04a8d790819d53418e30329806b522e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
