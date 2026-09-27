export const name="intersect-square-duotone";
export const id="dl_d71d18033c004298a291";
export const url=new URL("../icons/intersect-square-duotone.svg?v=b57803b369d1b6006d07e14c70f7a0343497f5e587c7200ec96891efdc6c943f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
