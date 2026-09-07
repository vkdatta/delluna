export const name="shield-star";
export const id="dl_0614aa91b87f41f4a424";
export const url=new URL("../icons/S/shield-star.svg?v=a7922abc77f65f2dc772fb0be14731cb82da4921f16f7bc60649e279cca37f06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
