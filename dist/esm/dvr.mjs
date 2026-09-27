export const name="dvr";
export const id="dl_e4bda80bd47e98bab219";
export const url=new URL("../icons/dvr.svg?v=0e4919fcb0099ead50e8560309e18079030df40ad4bff23293cc701d30ef3bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
