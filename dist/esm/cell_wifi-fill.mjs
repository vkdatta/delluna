export const name="cell_wifi-fill";
export const id="dl_d6c3784a55241836de77";
export const url=new URL("../icons/cell_wifi-fill.svg?v=591d995acae968d1bd871467502ce3df84d0260513f2f655056489a1d9286b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
