export const name="barcode-fill";
export const id="dl_e6fbe92c6a1745ed92b7";
export const url=new URL("../icons/barcode-fill.svg?v=56b7cf91cf59210834dcab3bd2176fcdafe20c6ba5deea14f85048c27ad5f596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
