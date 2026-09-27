export const name="hdr_auto-fill";
export const id="dl_aaf1d18c60578b136d41";
export const url=new URL("../icons/hdr_auto-fill.svg?v=f2e252f497f3d6bee97f500af089c6aa635978df8e2ed3fd50aef915f79c85f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
