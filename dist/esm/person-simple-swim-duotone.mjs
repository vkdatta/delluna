export const name="person-simple-swim-duotone";
export const id="dl_bc4b698f2ded437f8811";
export const url=new URL("../icons/person-simple-swim-duotone.svg?v=f4c62007b596825d6bf4e7ea744a9ca22c52631d2197542663fb2c1fc4d7db39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
