export const name="lucid_3-move-left";
export const id="dl_bda4178c780248c89229";
export const url=new URL("../icons/lucid_3-move-left.svg?v=68f14363b13144acc30a3ebb5da49b215973eaace5ab2849ae2658b3d7397d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
