export const name="shield-duotone";
export const id="dl_78c1864ab2324272a3d9";
export const url=new URL("../icons/S/shield-duotone.svg?v=978599af811f72eecf120c7b7da931489f3c09c80728a2b6e33b529bc426ab2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
