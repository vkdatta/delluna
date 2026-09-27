export const name="archive";
export const id="dl_995faa08342f44fa8765";
export const url=new URL("../icons/archive.svg?v=590819ec5df5dbe183dc003089de941da4ded6b4ffac4df2f8253a218597fdbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
