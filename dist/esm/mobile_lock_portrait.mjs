export const name="mobile_lock_portrait";
export const id="dl_6c5a183b22f412a5708b";
export const url=new URL("../icons/mobile_lock_portrait.svg?v=1d9e2b78bff0b2bfd8ac3d3f3dcb890bbe76eabe412e5596070a36d029e27e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
