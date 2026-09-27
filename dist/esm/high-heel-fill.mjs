export const name="high-heel-fill";
export const id="dl_0f994b5a9f044c498bc3";
export const url=new URL("../icons/high-heel-fill.svg?v=a4a9295f80fac3b7915d38358c1217376e0ab77a9af4ed662a37f775f91ece52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
