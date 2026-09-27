export const name="looks_5";
export const id="dl_47518d2df63798884007";
export const url=new URL("../icons/looks_5.svg?v=4a58467b6e4f2b8921ce4dd9b0e4ed041e307ceead24261ff17757f9cd894b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
