export const name="lucid_3-move-left";
export const id="dl_bda4178c780248c89229";
export const url=new URL("../icons/lucid_3-move-left.svg?v=1feea09e2f63bb7f95573ad928d09721cbb58541fa4e33ab52be5d377f393077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
