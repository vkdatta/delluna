export const name="cloud-fill";
export const id="dl_b18856b2b0f848dda552";
export const url=new URL("../icons/cloud-fill.svg?v=0fc8fc8b3d7d8dff2196280a59fb87c1b661ff75011af817eb413c6f85a35b68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
