export const name="desk-fill";
export const id="dl_ae4d9aa89c804dae9470";
export const url=new URL("../icons/desk-fill.svg?v=b0f473cd765ef2ffd2624333d9f237633ed64f31322e333e92aa82ab7a515fec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
