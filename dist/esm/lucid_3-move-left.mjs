export const name="lucid_3-move-left";
export const id="dl_bda4178c780248c89229";
export const url=new URL("../icons/lucid_3-move-left.svg?v=faf3588b7278206bdc41811b886e40c62aa2a63475b2d5e4f2fe5c6e6ac22892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
