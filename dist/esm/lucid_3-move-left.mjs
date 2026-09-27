export const name="lucid_3-move-left";
export const id="dl_bda4178c780248c89229";
export const url=new URL("../icons/lucid_3-move-left.svg?v=26af19204f2defe3029109a18e7b2339c62d0a80c81f6e1787e3a359d6508293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
