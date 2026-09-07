export const name="lucid_2-globe-check";
export const id="dl_5f6ddde44f4c4ac89020";
export const url=new URL("../icons/lucid_2-globe-check.svg?v=ea214985223b3d052d3475ccdaada1cbae1ff1d8a7ba64599c144a1817ca3918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
