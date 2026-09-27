export const name="pause";
export const id="dl_d2a403da52f04e20be8a";
export const url=new URL("../icons/pause.svg?v=e8fc12e491ada5082b2a9b205c300a8fd65663152f4b671ae3dbd94d83be3aad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
