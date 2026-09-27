export const name="lucid_3-printer-x";
export const id="dl_c44dc97948a94c7e82eb";
export const url=new URL("../icons/lucid_3-printer-x.svg?v=e708474343db2c7a09bcd836962025ba1d8d326fa90191d4caada1452c44b540",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
